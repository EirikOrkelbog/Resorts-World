export default function expandHotelsContainer() {
	let selectedHotell = null; //"hilton" "conrad"

	const expandHilton = document.querySelector('.expand-hilton');
	const expandCrockfords = document.querySelector('.expand-crockfords');
	const expandConrad = document.querySelector('.expand-conrad');
	const containers = document.querySelectorAll('.hotels__expand-container');
	const paragraphContainer = document.querySelectorAll('.expand__paragraph-container');
	const image = document.querySelectorAll('.expand-image');
	const text = document.querySelectorAll('.hotel__text');
	const buttonContainer = document.querySelectorAll('.visit-hotel__container');

	expandHilton.addEventListener('click', handleExpandHilton);
	expandCrockfords.addEventListener('click', handleExpandCrockfords);
	expandConrad.addEventListener('click', handleExpandConrad);

	function handleExpandHilton(event) {
		expandContainerHilton();
		adjustingPositionHilton();
		addingContentHilton();
		shrinkOtherHilton();
	}

	function handleExpandCrockfords(event) {
		expandContainerCrockfords();
		adjustingPositionCrockfords();
		addingContentCrockfords();
		shrinkOtherCrockfords();
	}

	function handleExpandConrad(event) {
		expandContainerConrad();
		adjustingPositionConrad();
		addingContentConrad();
		shrinkOtherConrad();
	}

// Hilton
	function expandContainerHilton() {
		if (containers[0].style.width === '33.3vw') {
			containers[0].style.width = '80vw';
		} else {
			containers[0].style.width = '33.3vw';
		}
	}

	function adjustingPositionHilton() {
		if (containers[0].style.width === '80vw') {
			paragraphContainer[0].style.alignItems = 'flex-start';
			paragraphContainer[0].style.justifyContent = 'flex-start';
			paragraphContainer[0].style.paddingLeft = '2rem';
		} else {
			paragraphContainer[0].style.alignItems = '';
			paragraphContainer[0].style.justifyContent = '';
			paragraphContainer[0].style.paddingLeft = '';
		}
	}

	function addingContentHilton() {
		if (containers[0].style.width === '80vw') {
			image[0].style.display = 'block';
			text[0].style.display = 'block';
			buttonContainer[0].style.display = 'flex';
		} else {
			image[0].style.display = 'none';
			text[0].style.display = 'none';
			buttonContainer[0].style.display = 'none';
		}
	}

	function shrinkOtherHilton() {
		if (containers[0].style.width === '80vw') {
			hideCrockfords();
			hideConrad();
		}	
	}

	function hideHilton() {
		containers[0].style.width = '33.3vw';
		paragraphContainer[0].style.alignItems = '';
		paragraphContainer[0].style.justifyContent = '';
		paragraphContainer[0].style.paddingLeft = '';
		image[0].style.display = 'none';
		text[0].style.display = 'none';
		buttonContainer[0].style.display = 'none';
	}

	
// Crockfords
	function expandContainerCrockfords() {
		if (containers[1].style.width === '33.3vw') {
			containers[1].style.width = '80vw';
		} else {
			containers[1].style.width = '33.3vw';
		}
	}

	function adjustingPositionCrockfords() {
		if (containers[1].style.width === '80vw') {
			paragraphContainer[1].style.alignItems = 'flex-start';
			paragraphContainer[1].style.justifyContent = 'flex-start';
			paragraphContainer[1].style.paddingLeft = '2rem';
		} else {
			paragraphContainer[1].style.alignItems = '';
			paragraphContainer[1].style.justifyContent = '';
			paragraphContainer[1].style.paddingLeft = '';
		}
	}

	function addingContentCrockfords() {
		if (containers[1].style.width === '80vw') {
			image[1].style.display = 'block';
			text[1].style.display = 'block';
			buttonContainer[1].style.display = 'flex';
		} else {
			image[1].style.display = 'none';
			text[1].style.display = 'none';
			buttonContainer[1].style.display = 'none';
		}
	}

	function shrinkOtherCrockfords() {
		if (containers[1].style.width === '80vw') {
			hideHilton();
			hideConrad();
		}
	}

	function hideCrockfords() {
		containers[1].style.width = '33.3vw';
		paragraphContainer[1].style.alignItems = '';
		paragraphContainer[1].style.justifyContent = '';
		paragraphContainer[1].style.paddingLeft = '';
		image[1].style.display = 'none';
		text[1].style.display = 'none';
		buttonContainer[1].style.display = 'none';
	}

	
// Conrad
	function expandContainerConrad() {
		if (containers[2].style.width === '33.3vw') {
			containers[2].style.width = '80vw';
		} else {
			containers[2].style.width = '33.3vw';
		}
	}

	function adjustingPositionConrad() {
		if (containers[2].style.width === '80vw') {
			paragraphContainer[2].style.alignItems = 'flex-start';
			paragraphContainer[2].style.justifyContent = 'flex-start';
			paragraphContainer[2].style.paddingLeft = '2rem';
		} else {
			paragraphContainer[2].style.alignItems = '';
			paragraphContainer[2].style.justifyContent = '';
			paragraphContainer[2].style.paddingLeft = '';
		}
	}

	function addingContentConrad() {
		if (containers[2].style.width === '80vw') {
			image[2].style.display = 'block';
			text[2].style.display = 'block';
			buttonContainer[2].style.display = 'flex';
		} else {
			image[2].style.display = 'none';
			text[2].style.display = 'none';
			buttonContainer[2].style.display = 'none';
		}
	}

	function shrinkOtherConrad() {
		if (containers[2].style.width === '80vw') {
			hideCrockfords();
			hideHilton();
		}
	}

	function hideConrad() {
		containers[2].style.width = '33.3vw';
		paragraphContainer[2].style.alignItems = '';
		paragraphContainer[2].style.justifyContent = '';
		paragraphContainer[2].style.paddingLeft = '';
		image[2].style.display = 'none';
		text[2].style.display = 'none';
		buttonContainer[2].style.display = 'none';
	}

}