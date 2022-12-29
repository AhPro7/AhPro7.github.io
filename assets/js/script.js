const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    // find the section in view
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        const sectionTitle = section.querySelector('h2');

        if (!sectionTitle.classList.contains('underline'))
            if (window.scrollY >= (sectionTop - sectionHeight / 3)) {
                sectionTitle.classList.add('underline');
            }

        if (window.scrollY >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');

        }
    });

    // remove active class from all links
    document.querySelectorAll('nav ul a li').forEach(a => {
        a.classList.remove('active');
    }
    );

    // add active class to the link
    if (current)
        document.querySelector(`nav ul a[href="#${current}"] li`).classList.add('active');

})