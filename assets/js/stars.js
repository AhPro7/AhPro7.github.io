// Create a function to generate a random number between min and max
function getRandomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

// Create a function to generacreateStarte a random star element
function createStar() {
  // Create a new star element
  const star = document.createElement('div');
  star.classList.add('star');

  // Set the position of the star randomly on the x-axis and y-axis
  const x = getRandomNumber(-100, window.innerWidth);
  const y = getRandomNumber(-100, window.innerHeight);
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
for (let i = 0; i < 100; i++) {
  const star = createStar();
  document.body.appendChild(star);
  document.body.appendChild(star);
}

// animate the stars to swirl around the page with speed inversely proportional to their size
const stars = document.querySelectorAll('.star');

const animateStars = () => {
  stars.forEach((star) => {
    const x = parseFloat(star.style.left);
    const y = parseFloat(star.style.top);
    const size = parseFloat(star.style.width);
    const isPositiveX = Math.random() < 0.5;
    const isPositiveY = Math.random() < 0.5;
    const directionX = isPositiveX ? 1 : -1;
    const directionY = isPositiveY ? 1 : -1;

    star.style.left = `${x + directionX * (10 * size)}px`;
    star.style.top = `${y + directionY * (10 * size)}px`;
  });
};

const interval = setInterval(animateStars, 4000);