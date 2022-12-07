export default function pauseVideo() {

	const video = document.querySelector('.pause-video');
	const backgroundVideo = document.querySelector('.main__background-video');

	video.addEventListener('click', handlePauseClick);

	function handlePauseClick(event) {
		videoPlayPause();
	}

	/**
	 * Toggles play and pause of video
 	*/
	function videoPlayPause() {
		if (backgroundVideo.paused) {
			backgroundVideo.play();
		} else {
			backgroundVideo.pause();
		}
	}

	// Mobile pause/play
	const mobilePlayPause = document.querySelectorAll('.mobile__play-pause');

	mobilePlayPause[0].addEventListener('click', handlePlayClick);
	mobilePlayPause[1].addEventListener('click', handlePauseClick);
	

	function handlePlayClick(event) {
		videoPlayPause();
		hideIcon();
	}

	function handlePauseClick(event) {
		videoPlayPause();
		hideIcon();
	}

	/**
	 * Shows the correct icon based on paused or playing video  
 	*/
	function hideIcon() {
		if (backgroundVideo.paused) {
			mobilePlayPause[0].classList.add('play');
			mobilePlayPause[1].classList.remove('pause');
		} else if (!backgroundVideo.paused) {
			mobilePlayPause[1].classList.add('pause');
			mobilePlayPause[0].classList.remove('play');

		}
	}

}