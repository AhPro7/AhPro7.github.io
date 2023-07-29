// Create a function to generate a random number between min and max
function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
  }
  
  // Create a function to generate a random star element
  function createStar() {
    // Create a new star element
    const star = document.createElement('div');
    star.classList.add('star');
  
    // Set the position of the star randomly on the entire page
    const x = getRandomNumber(0, window.innerWidth);
    const y = getRandomNumber(0, window.innerHeight);
    star.style.left = `${x}px`;
    star.style.top = `${y}px`;
  
    // Set the size of the star randomly
    const size = getRandomNumber(1, 4);
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
  
    // Set the opacity of the star randomly
    const opacity = getRandomNumber(0.2, 1);
    star.style.opacity = opacity;
  
    // Return the star element
    return star;
  }
  

  // Add stars to the page
  for (let i = 0; i < 200; i++) {
    const star = createStar();
    document.body.appendChild(star);
  }