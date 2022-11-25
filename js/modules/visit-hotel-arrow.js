export default function visitHotelArrow() {

	const visitHotelContainer = document.querySelectorAll('.visit-hotel__container');
	const arrow = document.querySelectorAll('.arrow');
	const arrowHotelHidden = document.querySelectorAll('.arrow__hotel-hidden');
	
	let i = 0;

	for (i = 0; i < visitHotelContainer.length; i += 1) {

		visitHotelContainer[i].addEventListener('mouseenter', handleNavCircleEnter);
		visitHotelContainer[i].addEventListener('mouseleave', handleNavCircleLeave);
	}
		
		function handleNavCircleEnter(event) {
			translateArrowEnter();
		}
	
		function handleNavCircleLeave(event) {
			translateArrowLeave();
		}
		
		
		function translateArrowEnter() {
			arrow[0].style.transform = 'translate(400%, -50%)';
			arrowHotelHidden[0].style.transform = 'translate(-50%, -50%)';
			arrow[1].style.transform = 'translate(400%, -50%)';
			arrowHotelHidden[1].style.transform = 'translate(-50%, -50%)';
			arrow[2].style.transform = 'translate(400%, -50%)';
			arrowHotelHidden[2].style.transform = 'translate(-50%, -50%)';
		}
		
		function translateArrowLeave() {
			arrow[0].style.transform = 'translate(-50%, -50%)';
			arrowHotelHidden[0].style.transform = 'translate(-400%, -50%)';
			arrow[1].style.transform = 'translate(-50%, -50%)';
			arrowHotelHidden[1].style.transform = 'translate(-400%, -50%)';
			arrow[2].style.transform = 'translate(-50%, -50%)';
			arrowHotelHidden[2].style.transform = 'translate(-400%, -50%)';
		}

}