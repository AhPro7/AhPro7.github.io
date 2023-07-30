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
  const x = getRandomNumber(-300, window.innerWidth + 300);
  const y = getRandomNumber(-300, window.innerHeight + 300);
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
  // document.body.appendChild(star);
}



// JavaScript
const planetContainer = document.getElementById('planet-container');
const planetImages = [
  '/assets/img/pl1.png',
  '/assets/img/pl2.png',
  '/assets/img/pl3.png',
  '/assets/img/pl4.png',
  '/assets/img/pl5.png',
  '/assets/img/pl6.png',
  '/assets/img/pl7.png',


  // 'assets/img/Ahmed-t.png',
  // 'assets/img/Kaggle-CLI.png',
  // add more image URLs as needed
];
for (let i = 0; i < 7; i++) {
  const planet = document.createElement('div');
  planet.classList.add('planet');
  planet.style.top = `${Math.random() * 100}vh`;
  planet.style.left = `${Math.random() * 100}vw`;
  planet.style.animationDuration = `${Math.random() * 80 + 10}s`;
  planet.style.animationDelay = `${Math.random() * 5}s`;
  planet.style.backgroundImage = `url(${planetImages[Math.floor(Math.random() * planetImages.length)]})`;
  planetContainer.appendChild(planet);
}

// make function to delete stars and planets by clicking on button 
function deleteStarsandPlanets() {
  const stars = document.querySelectorAll('.star');
  const planets = document.querySelectorAll('.planet');
  stars.forEach((star) => {
    star.remove();
  });
  planets.forEach((planet) => {
    planet.remove();
  });
}

// to use the function you will add onclick="deleteStarsandPlanets()" to the button in the html file eg. <button onclick="deleteStarsandPlanets()">Delete Stars and Planets</button>

// make a function to delte stars and planets and add them back by clicking the button again
function hideandShowStarsandPlanets() {
// get the stars count
  const starsCount = document.querySelectorAll('.star').length;
// check if the stars count is 0 add the stars and planets back if not delete them
  if (starsCount === 0) {
    // add stars and planets back and the interval to animate the stars

    // for (let i = 0; i < 100; i++) {
    //   const star = createStar();
    //   document.body.appendChild(star);
    //   document.body.appendChild(star);
    // }
    // const interval = setInterval(animateStars, 1000);
    // const planetContainer = document.getElementById('planet-container');
    // const planetImages = [
    //   '/assets/img/pl1.png',
    //   '/assets/img/pl2.png',
    //   '/assets/img/pl3.png',
    //   '/assets/img/pl4.png',
    //   '/assets/img/pl5.png',
    //   '/assets/img/pl6.png',
    //   '/assets/img/pl7.png',
    // ];
    // for (let i = 0; i < 7; i++) {
    //   const planet = document.createElement('div');
    //   planet.classList.add('planet');
    //   planet.style.top = `${Math.random() * 100}vh`;
    //   planet.style.left = `${Math.random() * 100}vw`;
    //   planet.style.animationDuration = `${Math.random() * 80 + 10}s`;
    //   planet.style.animationDelay = `${Math.random() * 5}s`;
    //   planet.style.backgroundImage = `url(${planetImages[Math.floor(Math.random() * planetImages.length)]})`;
    //   planetContainer.appendChild(planet);
    // }
    
    // reload the page without refreshing
    location.reload();
    
    
  }
  else {
    deleteStarsandPlanets();
  }
}

