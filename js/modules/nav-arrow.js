export default function navArrow() {

	const navCircleContainer = document.querySelector('.nav__circle-container');
	const navArrow = document.querySelector('.nav__arrow');
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
}