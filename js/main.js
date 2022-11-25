import navArrow from './modules/nav-arrow.js';
import showNavImage from './modules/nav-hover-image.js';
import pauseVideo from './modules/pause-video.js';
import scrollExplore from './modules/scroll-explore.js';
import headerMobileColor from './modules/header-mobile-color.js';
import pauseAboutVideo from './modules/pause-about-video.js';
import buttonCircle from './modules/button-circle.js';
import visitHotelArrow from './modules/visit-hotel-arrow.js';


navArrow();
showNavImage();
pauseVideo();
scrollExplore();
headerMobileColor();
pauseAboutVideo();
buttonCircle();
visitHotelArrow();

// Changing color on start planning circle 
// const [red, green, blue] = [216, 41, 58]

// window.addEventListener('scroll', () => {
//   const y = 1 + (window.scrollX || window.pageXOffset) / 150
//   const [r, g, b] = [red/y, green/y, blue/y].map(Math.round)
//   navCircle.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
// })





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

