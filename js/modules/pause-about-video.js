export default function pauseAboutVideo() {
	const aboutVideo = document.querySelector('.about__pause-video');
	const aboutBackgroundVideo = document.querySelector('.about__video');

	aboutVideo.addEventListener('click', handleAboutPauseClick);

	function handleAboutPauseClick(event) {
		aboutVideoPlayPause();
	}

	/**
	 * Toggles play and pause of video
 	*/
	function aboutVideoPlayPause() {
		if (aboutBackgroundVideo.paused) {
			aboutBackgroundVideo.play();
		} else {
			aboutBackgroundVideo.pause();
		}
	}
}