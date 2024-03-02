const scrollToTop = () => {
	const topBtn = document.querySelector('#scrollToTopButton')
	topBtn.addEventListener('click', event => {
		event.preventDefault
		seamless.scrollInView(document.querySelector('.header'), {
			block: center,
			inline: center,
			behavior: 'smooth',
		})
	})
}
scrollToTop()
