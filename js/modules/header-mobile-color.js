export default function headerMobileColor() {

	const header = document.querySelector('.header');
	const bookButton = document.querySelector('.mobile__button-book');

	window.addEventListener('scroll', handleHeaderScroll);

	function handleHeaderScroll(event) {
		changeColorOnScroll();
	}

	function changeColorOnScroll() {
		const scrollY = window.scrollY;

		if (scrollY > 0) {
			header.style.backgroundColor = 'white';
			bookButton.style.backgroundColor = 'black';
			bookButton.style.border = '1px solid white'
		} else {
			header.style.backgroundColor = 'transparent';
			bookButton.style.backgroundColor = 'rgb(216, 41, 58)';
			bookButton.style.border = 'none'
		}
	}
	console.log(window);
}