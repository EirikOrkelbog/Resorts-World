import navArrow from './modules/nav-arrow.js';
// import dimBackground from './modules/dim-background.js';
import showNavImage from './modules/nav-hover-image.js';
import pauseVideo from './modules/pause-video.js';
import scrollExplore from './modules/scroll-explore.js';
import headerMobileColor from './modules/header-mobile-color.js';

navArrow();
// dimBackground();
showNavImage();
pauseVideo();
scrollExplore();
headerMobileColor();

// Changing color on start planning circle 
// const [red, green, blue] = [216, 41, 58]

// window.addEventListener('scroll', () => {
//   const y = 1 + (window.scrollX || window.pageXOffset) / 150
//   const [r, g, b] = [red/y, green/y, blue/y].map(Math.round)
//   navCircle.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
// })




// about pause video

// const aboutVideo = document.querySelector('.about__pause-video');
// const aboutBackgroundVideo = document.querySelector('.about__video');

// aboutVideo.addEventListener('click', handleAboutPauseClick);

// function handleAboutPauseClick(event) {
// 	aboutVideoPlayPause();
// }

// function aboutVideoPlayPause() {
// 	if (aboutBackgroundVideo.paused) {
// 		aboutBackgroundVideo.play();
// 	} else {
// 		aboutBackgroundVideo.pause();
// 	}
// }





// Moving text on about circle
// const aboutCircle = document.querySelector('.about__play-circle');
// const circleText = document.querySelectorAll('.circle__play-sound');

// aboutCircle.addEventListener('mouseenter', handleCircleEnter);
// aboutCircle.addEventListener('mouseleave', handleCircleLeave);


// function handleCircleEnter(event) {
// 	expandCircleText();
// }

// function handleCircleLeave(event) {
// 	resetCircleText();
// }

// function expandCircleText() {
// 	circleText[0].style.marginTop = '1.3rem';
// 	circleText[1].style.marginBottom = '1.3rem';
// }

// function resetCircleText() {
// 	circleText[0].style.marginTop = '.8rem';
// 	circleText[1].style.marginBottom = '.8rem';
// }



// expand hotels

// const content = document.querySelector('.expand__content-container');
// const expandContainer = document.querySelector('.entertainment__expand-container');

// expandContainer.addEventListener('click', handleExpandOnClick);

// function handleExpandOnClick(event) {
// 	closeAndOpenExpandContainer();
// }
	
// function closeAndOpenExpandContainer() {
// 	content.style.display = 'none';	
// 	expandContainer.style.width = '33.3rem';
// }

