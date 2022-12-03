export default function restaurantChangeContent() {
	const navigationButtons = document.querySelectorAll('.navigation__text-wrapper');
	const imageSlides = document.querySelectorAll('.image__slide');
	const informationText = document.querySelectorAll('.information__changing');

	for (let index = 0; index < navigationButtons.length; index += 1) {
		navigationButtons[index].addEventListener('click', event => {
			handleNavigationButtonClick(event, index);
		});
	}

	function handleNavigationButtonClick(event, index) {
		changeCurrentSlideIndex(index);
		changeInformationTextIndex(index);
		updateSlideshowHTML();
	}

	let currentSlideIndex = 0;

	function changeCurrentSlideIndex(index) {
		currentSlideIndex = index;
	}

	function changeInformationTextIndex(index) {
		currentSlideIndex = index;
	}

	function updateSlideshowHTML() {
		for (const slide of imageSlides) {
			slide.classList.remove('slide__visible');
		}
	
		for (const text of informationText) {
			text.classList.remove('information__slide-visible');
		}

		for (const border of navigationButtons) {
			border.classList.remove('navigation__border-line');
		}
		
		imageSlides[currentSlideIndex].classList.add('slide__visible');
		informationText[currentSlideIndex].classList.add('information__slide-visible');
		navigationButtons[currentSlideIndex].classList.add('navigation__border-line');
	}
}