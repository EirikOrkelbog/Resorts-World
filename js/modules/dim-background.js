
const hotelLink = document.querySelectorAll('.hotel__link');
const backgroundDark = document.querySelector('.background__dark');

for (i = 0; i < hotelLink.length; i += 1) {
	hotelLink[i].addEventListener('mouseenter', handleHotelLinkMouseenter);
	hotelLink[i].addEventListener('mouseleave', handleHotelLinkMouseleave);
}

function handleHotelLinkMouseenter(event) {
	showImageandDarkBackground();
}

function handleHotelLinkMouseleave(event) {
	hideImageandDarkBackground();
}

function showImageandDarkBackground() {
	backgroundDark.classList.add('background__dark-hover');
	backgroundDark.classList.remove('background__light-hover');
}

function hideImageandDarkBackground() {
	backgroundDark.classList.remove('background__dark-hover');
	backgroundDark.classList.add('background__light-hover');
}