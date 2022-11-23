export default function buttonCircle() {
	
	const circlePlay = document.getElementById('button__circle-play');
	const circleIcon = document.getElementById('button__circle-icon');
	const circleSound = document.getElementById('button__circle-sound');
	
	window.addEventListener('resize', handleButtonCircleColor);
	
	function handleButtonCircleColor(event) {
		changeButtonCircleColor();
	}
	
	function changeButtonCircleColor() {
		let innerWidth = window.innerWidth;
		
		if (innerWidth >= 1200) {
			circlePlay.src = './assets/icons/Play-with.svg';
			circleIcon.src = './assets/icons/play-icon.svg';
			circleSound.src = './assets/icons/Sound.svg';
		} else if (innerWidth < 1200) {
			circlePlay.src = './assets/icons/Play-with-red.svg';
			circleIcon.src = './assets/icons/play-icon-red.svg';
			circleSound.src = './assets/icons/Sound-red.svg';
		}
	} 

	// Moving text on button circle
	const buttonCircle = document.querySelector('.button__circle');
	const circleText = document.querySelectorAll('.circle__play-sound');

	buttonCircle.addEventListener('mouseenter', handleCircleEnter);
	buttonCircle.addEventListener('mouseleave', handleCircleLeave);


	function handleCircleEnter(event) {
		expandCircleText();
	}

	function handleCircleLeave(event) {
		resetCircleText();
	}

	function expandCircleText() {
		circleText[0].style.marginTop = '1.3rem';
		circleText[1].style.marginBottom = '1.3rem';
	}

	function resetCircleText() {
		circleText[0].style.marginTop = '.8rem';
		circleText[1].style.marginBottom = '.8rem';
	}
}