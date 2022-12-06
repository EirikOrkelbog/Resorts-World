export default function headerMobileColor() {
	const header = document.querySelector('.header');
	const buttonBook = document.querySelector('.button__book');

	window.addEventListener('scroll', handleHeaderScroll);

	function handleHeaderScroll(event) {
		changeColorOnScroll();
	}

	function changeColorOnScroll() {
		const scrollY = window.scrollY;

		if (scrollY > 0) {
			header.classList.add('header__mobile');
			buttonBook.classList.add('button__book-scroll');
		} else {
			header.classList.remove('header__mobile');
			buttonBook.classList.remove('button__book-scroll');
		}
	}
}