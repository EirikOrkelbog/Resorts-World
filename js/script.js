const navCircle = document.querySelector('.nav__circle');
const navArrow = document.querySelector('.nav__hotels-arrow');
const navArrowHidden = document.querySelector('.hotels__arrow-hidden');


navCircle.addEventListener('mouseenter', handleNavCircleEnter);
navCircle.addEventListener('mouseleave', handleNavCircleLeave);

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