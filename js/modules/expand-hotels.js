export default function expandHotelsContainer() {
	const containers = document.querySelectorAll('.hotels__expand-container');
	const content = document.querySelectorAll('.hotels__content');
	const hotelsLogo = document.querySelectorAll('.hotel__logo');
	
	for (let index = 0; index < containers.length; index += 1) {
		containers[index].addEventListener('click', event => {
			handleContainerClick(event, index);
		});
	}
	
	function handleContainerClick(event, index) {
		changeContainerIndex(index);
		toggleExpand();
		updateSlideshowHTML();
	}
	
	let currentContainerIndex = null;
	let expandedContent = false;

	/**
	 * Changes the variable from null to the index of the container that is clicked 
	 * 
	 * @param {number} index The index position
 	*/
	function changeContainerIndex(index) {
		currentContainerIndex = index;
	}

	/**
	 * Changes the variable from false to true 
 	*/
	function toggleExpand() {
		expandedContent = !expandedContent;
	}

	/**
	 * Updates all the html when a container is clicked on   
 	*/
	function updateSlideshowHTML() {
		const windowWidth = window.innerWidth;

		if (windowWidth > 1200 && expandedContent === true) {
		
			for (const container of containers) {
				container.classList.remove('hotels__expand-active');
			}

			for (const item of content) {
				item.classList.add('hotels__content-active');
			}

			for (const logo of hotelsLogo) {
				logo.classList.remove('hotel__logo-hidden');
			}

			containers[currentContainerIndex].classList.add('hotels__expand-active');
			content[currentContainerIndex].classList.remove('hotels__content-active');
			hotelsLogo[currentContainerIndex].classList.add('hotel__logo-hidden');

		} else {
			for (const container of containers) {
				container.classList.remove('hotels__expand-active');
			}

			for (const item of content) {
				item.classList.add('hotels__content-active');
			}

			for (const logo of hotelsLogo) {
				logo.classList.remove('hotel__logo-hidden');
			}

			containers[currentContainerIndex].classList.remove('hotels__expand-active');
			content[currentContainerIndex].classList.add('hotels__content-active');
			hotelsLogo[currentContainerIndex].classList.remove('hotel__logo-hidden');
		}
	}
}
