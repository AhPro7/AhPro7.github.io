const typed_element = document.querySelector('.typed');
const typed_text_content = typed_element.textContent.trim();
const type_speed_interval = typed_element.dataset.typeInterval 

let l_count = 1;
const typingInterval = setInterval(() => {
    console.log('tick');
    console.log(typed_element.textContent);
    typed_element.textContent = typed_text_content.slice(0, l_count);
    l_count++;
    if (typed_element.textContent.length === typed_text_content.length) {
        clearInterval(typingInterval);
    }
}
, type_speed_interval);

