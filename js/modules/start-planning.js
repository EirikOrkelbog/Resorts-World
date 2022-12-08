export default function startPlanning() {

	const sectionPlanning = document.querySelector('.section__planning');
	const startPlanningButton = document.querySelector('.nav__circle-container');

	startPlanningButton.addEventListener('click', handleScrollToPlanningClick);

	function handleScrollToPlanningClick(event) {
		scrollToSectionPlanning();
	}

	function scrollToSectionPlanning() {
		sectionPlanning.scrollIntoView({behavior: "smooth", inline: "start"})
	}
}