export default function scrollExplore() {

	const sectionAbout = document.querySelector('.section__about');
	const scrollToExplore = document.querySelector('.scroll__explore');

	scrollToExplore.addEventListener('click', handleScrollToExploreClick);

	function handleScrollToExploreClick(event) {
		scrollToSectionAbout();
	}

	function scrollToSectionAbout() {
		sectionAbout.scrollIntoView({behavior: "smooth", inline: "start"})
	}
}