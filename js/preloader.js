const preloader = () => {
	const preloader = document.querySelector('.preloader')
	setTimeout(() => {
		preloader.classList.add('active')
	}, 500)
}
preloader()
