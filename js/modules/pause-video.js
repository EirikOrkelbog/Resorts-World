export default function pauseVideo() {

	const video = document.querySelector('.pause-video');
	const backgroundVideo = document.querySelector('.main__background-video');

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


	// Mobile pause/play

	const play = document.querySelector('.play');
	const pause = document.querySelector('.pause');

	play.addEventListener('click', handlePlayClick);
	pause.addEventListener('click', handlePauseClick);

	function handlePlayClick(event) {
		videoPlayPause();
		hideIcon();
	}

	function handlePauseClick(event) {
		videoPlayPause();
		hideIcon();
	}

	function hideIcon() {
		if (backgroundVideo.paused) {
			play.style.display = 'block';
			pause.style.display = 'none';
		} else if (!backgroundVideo.paused) {
			play.style.display = 'none';
			pause.style.display = 'block';
		}
	}
}