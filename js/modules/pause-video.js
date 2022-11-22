export default function pauseVideo() {

	const video = document.querySelector('.pause-video');
	const backgroundVideo = document.querySelector('.main__background__video');

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
}