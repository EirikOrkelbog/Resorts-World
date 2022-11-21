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


// Changing color on start planning circle 
// const [red, green, blue] = [216, 41, 58]

// window.addEventListener('scroll', () => {
//   const y = 1 + (window.scrollX || window.pageXOffset) / 150
//   const [r, g, b] = [red/y, green/y, blue/y].map(Math.round)
//   navCircle.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
// })



// Darker background on hotel links hover 

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



// Show images on hotels link hover 

const hiltonLink = document.querySelector('.link__image-hilton');
const crockfordsLink = document.querySelector('.link__image-crockfords');
const conradLink = document.querySelector('.link__image-conrad');


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


// Scroll to explore 

const sectionAbout = document.querySelector('.section__about');
const scrollToExplore = document.querySelector('.span-container');

scrollToExplore.addEventListener('click', handleScrollToExploreClick);

function handleScrollToExploreClick(event) {
	scrollToSectionAbout();
}

function scrollToSectionAbout() {
	sectionAbout.scrollIntoView({behavior: "smooth", inline: "start"})
}



// pause video 
const video = document.querySelector('.pause-video');
const backgroundVideo = document.querySelector('.background__video');

video.addEventListener('click', handlePauseClick);

function handlePauseClick(event) {
	videoPlayPause();
}

function videoPlayPause() {
	if (backgroundVideo.paused) {
		backgroundVideo.play();
	} else {
		backgroundVideo.pause();
	}
}


// about pause video
const aboutVideo = document.querySelector('.about__pause-video');
const aboutBackgroundVideo = document.querySelector('.about__video');

aboutVideo.addEventListener('click', handleAboutPauseClick);

function handleAboutPauseClick(event) {
	aboutVideoPlayPause();
}

function aboutVideoPlayPause() {
	if (aboutBackgroundVideo.paused) {
		aboutBackgroundVideo.play();
	} else {
		aboutBackgroundVideo.pause();
	}
}


// Horizontal scroll
// const main = document.querySelector('.main');

// main.addEventListener('wheel', (event) => {
// 	event.preventDefault();
// 	main.scrollBy({
// 	left: event.deltaY < 0 ? -30 : 30
// 	}); 
// });




// Moving text on about circle
const aboutCircle = document.querySelector('.about__play-circle');
const circleText = document.querySelectorAll('.circle__play-sound');

aboutCircle.addEventListener('mouseenter', handleCircleEnter);
aboutCircle.addEventListener('mouseleave', handleCircleLeave);


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



// expand hotels

const content = document.querySelector('.expand__content-container');
const expandContainer = document.querySelector('.entertainment__expand-container');

expandContainer.addEventListener('click', handleExpandOnClick);

function handleExpandOnClick(event) {
	closeAndOpenExpandContainer();
}
	
function closeAndOpenExpandContainer() {
	content.style.display = 'none';	
	expandContainer.style.width = '33.3rem';
}



// for (i = 0; i < expandContainer.length; i += 1) {
// 	}
// const hotelsContent = content.index;
// console.log(hotelsContent);