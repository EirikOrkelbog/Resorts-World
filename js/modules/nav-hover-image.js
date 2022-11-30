export default function showNavImage() {
	const hiltonLink = document.querySelector('.link__image-hilton');
	const crockfordsLink = document.querySelector('.link__image-crockfords');
	const conradLink = document.querySelector('.link__image-conrad');
	const hotelLink = document.querySelectorAll('.hotel__link');


	hotelLink[0].addEventListener('mouseenter', handleHotelLinkHiltonMouseenter);
	hotelLink[1].addEventListener('mouseenter', handleHotelLinkCrockfordsMouseenter);
	hotelLink[2].addEventListener('mouseenter', handleHotelLinkConradMouseenter);

	hotelLink[0].addEventListener('mouseleave', handleHotelLinkHiltonMouseleave);
	hotelLink[1].addEventListener('mouseleave', handleHotelLinkCrockfordsMouseleave);
	hotelLink[2].addEventListener('mouseleave', handleHotelLinkConradMouseleave);

	function handleHotelLinkHiltonMouseenter(event) {
		showHiltonImage();
	}

	function handleHotelLinkCrockfordsMouseenter(event) {
		showCrockfordsImage();
	}

	function handleHotelLinkConradMouseenter(event) {
		showConradImage();
	}

	function handleHotelLinkHiltonMouseleave(event) {
		hideHiltonImage();
	}

	function handleHotelLinkCrockfordsMouseleave(event) {
		hideCrockfordsImage();
	}

	function handleHotelLinkConradMouseleave(event) {
		hideConradImage();
	}

	function showHiltonImage() {
		hiltonLink.classList.add('link__image-hilton--hover');
	}

	function hideHiltonImage() {
		hiltonLink.classList.remove('link__image-hilton--hover');
	}

	function showCrockfordsImage() {
		crockfordsLink.classList.add('link__image-crockfords--hover');
	}

	function hideCrockfordsImage() {
		crockfordsLink.classList.remove('link__image-crockfords--hover');
	}

	function showConradImage() {
		conradLink.classList.add('link__image-conrad--hover');
	}

	function hideConradImage() {
		conradLink.classList.remove('link__image-conrad--hover');
	}
}