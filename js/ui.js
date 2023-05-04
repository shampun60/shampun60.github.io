//==================ОТКЛЮЧАЕМ ССЫЛКИ=============================================================================================================================================================================================================================================================================
const defaultLinks = document.querySelectorAll("[data-default]");
if (defaultLinks.length > 0) {
	for (let index = 0; index < defaultLinks.length; index++) {
		const element = defaultLinks[index];
		element.addEventListener("click", function (e) {
			deleteClassLinks();
			e.target.classList.add("active")
			//e.preventDefault()
		})
		function deleteClassLinks() {
			for (let index = 0; index < defaultLinks.length; index++) {
				const element = defaultLinks[index];
				element.classList.remove("active")
			}
		}
	}
}



//========================ВЫВОДИМ МИНИАТЮРЫ КАРТИНОК=======================================================================================================================================================================================================================================================================
/*
const formFile = document.querySelector(".form-write-review__image");
if (formFile) {
	formFile.addEventListener("change", function (e) {
		let selectedFile = formFile.files[0]


		//Адрес картинки

		let fileUrl = URL.createObjectURL(selectedFile);

		formFile.insertAdjacentHTML(
			"afterend",
			`
			<div class="form-write-review__mini-image active">
			<img alt="не удалось открыть картинку" title="${selectedFile.name}" src="${fileUrl}"
			</div>
			`
		)
		document.body.classList.add("scroll-lock")
	})
}
*/




//=========================ДЕЛАЕМ=HOVER=НА=ССЫЛКИ=В=HEADER======================================================================================================================================================================================================================================================================
const links = document.querySelectorAll("[data-link]");
//При наведении
/*
links.forEach((link) => {
	link.addEventListener("mouseover", function (e) {
		if (!e.target.classList.contains("tdu")) {
			e.target.classList.add("tdu")
		}
		link.addEventListener("mouseout", function (e) {
			if (!e.target.classList.contains("lock")) {
				e.target.classList.remove("tdu")
			}
		})
	})
})
*/

//При клике
/*
if (links.length > 0) {
	for (let index = 0; index < links.length; index++) {
		const element = links[index];
		element.addEventListener("click", removeActiveClass);
		element.addEventListener("click", setActiveLink);
		element.addEventListener("mouseout", removeActiveClass);
	}
	function removeActiveClass(e) {
		document.querySelector("[data-link].active")
	}
	function setActiveLink(e) {
		e.target.classList.add("active")
	}
}
*/

//=====================КАСТОМНЫЕ СЕЛЕКТЫ==========================================================================================================================================================================================================================================================================
const dropMenus = document.querySelectorAll("[drop-menu]");
if (dropMenus.length > 0) {
	for (let index = 0; index < dropMenus.length; index++) {
		const dropMenu = dropMenus[index];
		dropMenu.addEventListener("click", function (e) {
			const dropMenuList = dropMenu.querySelector("[drop-menu-list]")
			const dropMenuButton = dropMenu.querySelector("[drop-menu-button]");
			const dropMenuLinks = dropMenu.querySelectorAll("[drop-menu-link]");
			dropMenuList.classList.toggle("active")
			if (dropMenuButton.tagName == 'BUTTON') {

				for (let index = 0; index < dropMenuLinks.length; index++) {
					const dropMenuLink = dropMenuLinks[index];
					dropMenuLink.addEventListener("click", function (e) {
						dropMenuButton.innerHTML = dropMenuLink.innerHTML;
						dropMenuList.classList.add("active")
						e.preventDefault()
					})
				}

			}
			else if (dropMenuButton.tagName == 'INPUT') {
				if (dropMenuLinks.length > 0) {
					for (let index = 0; index < dropMenuLinks.length; index++) {
						const dropMenuLink = dropMenuLinks[index];
						dropMenuLink.addEventListener("click", function (e) {
							dropMenuButton.removeAttribute("value");
							dropMenuButton.setAttribute("value", dropMenuLink.innerHTML)
							dropMenuList.classList.add("active")
							e.preventDefault()
						})
					}
				}
			}


		})
	}
}

//=================НАВИГАЦИЯ ПО САЙТУ==============================================================================================================================================================================================================================================================================
const linksTo = document.querySelectorAll("[data-goto]");

if (linksTo.length > 0) {
	for (let index = 0; index < linksTo.length; index++) {
		const linkTo = linksTo[index];
		linkTo.addEventListener("click", linkClickTo)

	}

	function linkClickTo(e) {
		const linkTo = e.target;
		if (linkTo.dataset.goto && document.querySelector(linkTo.dataset.goto)) {
			const gotoBlock = document.querySelector(linkTo.dataset.goto);
			const gotoBlockCoordinate = gotoBlock.getBoundingClientRect().top + window.pageYOffset - document.querySelector(".header").offsetHeight;

			window.scrollTo({
				top: gotoBlockCoordinate,
				behavior: "smooth",
			});
			e.preventDefault()
		}
	}
}
