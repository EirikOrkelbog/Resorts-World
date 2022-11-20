// Nav arrow 

const navCircleContainer = document.querySelector('.nav__circle-container');
const navCircle = document.querySelector('.nav__circle');
const navArrow = document.querySelector('.nav__hotels-arrow');
const navArrowHidden = document.querySelector('.arrow-hidden');


navCircleContainer.addEventListener('mouseenter', handleNavCircleEnter);
navCircleContainer.addEventListener('mouseleave', handleNavCircleLeave);

function handleNavCircleEnter(event) {
	translateArrowEnter();
}

function handleNavCircleLeave(event) {
	translateArrowLeave();
}


function translateArrowEnter() {
	navArrow.style.transform = 'translate(400%, -50%)';
	navArrowHidden.style.transform = 'translate(-50%, -50%)';
}

function translateArrowLeave() {
	navArrow.style.transform = 'translate(-50%, -50%)';
	navArrowHidden.style.transform = 'translate(-400%, -50%)';
}


// Changing color 
const [red, green, blue] = [216, 41, 58]

window.addEventListener('scroll', () => {
  const y = 1 + (window.scrollX || window.pageXOffset) / 150
  const [r, g, b] = [red/y, green/y, blue/y].map(Math.round)
  navCircle.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
})