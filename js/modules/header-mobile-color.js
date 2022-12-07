export default function headerMobileColor() {
	const header = document.querySelector('.header');

	window.addEventListener('scroll', handleHeaderScroll);

	function handleHeaderScroll(event) {
		changeColorOnScroll();
	}

	/**
	 * Adds a class and removes another class when we scroll just one pixel down  
 	*/
	function changeColorOnScroll() {
		const scrollY = window.scrollY;

		if (scrollY > 0) {
			header.classList.add('header__mobile');
		} else {
			header.classList.remove('header__mobile');
		}
	}
}