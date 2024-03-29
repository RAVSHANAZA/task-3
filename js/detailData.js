const detailData = () => {
	// const preloader = document.querySelector('.preloader')

	const renderGanreList = ganres => {
		const dropdownBlock = document.querySelector('.header__menu .dropdown')

		ganres.forEach(ganre => {
			dropdownBlock.insertAdjacentHTML(
				'beforeend',
				`
			<li><a href="../categories.html?ganre=${ganre}">${ganre}</a></li>`
			)
		})
	}

	const renderAnimeDetails = (array, itemId) => {
		const animeObj = array.find(item => item.id == itemId)
		const imageBlock = document.querySelector('.anime__details__pic')
		const viewsBlock = imageBlock.querySelector('.view')
		const titleBlock = document.querySelector('.anime__details__title h3')
		const subTitleBlock = document.querySelector('.anime__details__title span')
		const descriptionBlock = document.querySelector('.anime__details__text p')
		const breadcrumb = document.querySelector('.breadcrumb__links span')
		const widgetList = document.querySelectorAll(
			'.anime__details__widget ul li'
		)

		if (animeObj) {
			imageBlock.dataset.setbg = animeObj.image
			viewsBlock.insertAdjacentHTML(
				'beforeend',
				`<i class="fa fa-eye"></i>${animeObj.views}</div>`
			)

			titleBlock.textContent = animeObj.title
			subTitleBlock.textContent = animeObj['original-title']
			descriptionBlock.textContent = animeObj.description

			widgetList[0].insertAdjacentHTML(
				'beforeend',
				`<span>Data aired:</span>${animeObj.date}`
			)
			widgetList[1].insertAdjacentHTML(
				'beforeend',
				`<span>Rating:</span>${animeObj.rating}`
			)
			widgetList[2].insertAdjacentHTML(
				'beforeend',
				`<span>Genre:</span>${animeObj.tags.join(', ')}`
			)

			breadcrumb.textContent = animeObj.ganre

			document.querySelectorAll('.set-bg').forEach(elem => {
				elem.style.backgroundImage = `url(${elem.dataset.setbg})`
			})

			// setTimeout(() => {
			// 	preloader.classList.remove('active')
			// }, 500)
		} else {
			console.log('Аниме отсутствует!')
		}
	}

	// preloader.classList.add('active')
	// console.log(preloader)
	// не смог найти ошибку в preloader

	fetch('./db.json')
		.then(response => response.json())
		.then(data => {
			const ganres = new Set()
			const garneParams = new URLSearchParams(window.location.search).get(
				'itemId'
			)
			data.anime.forEach(item => {
				ganres.add(item.ganre)
			})
			if (garneParams) {
				renderAnimeDetails(data.anime, garneParams)
			} else {
				console.log('Аниме отсутствует!')
			}
			renderGanreList(ganres)
		})
}
detailData()
