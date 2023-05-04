window.onload = () => {

	//Header плашка
	/*
	const headerElem = document.querySelector(".header");
		
	const callback = function (entries, observer) {
		if (entries[0].isInteresting) {
			headerElem.classList.remove('scroll')
		} else {
			headerElem.classList.add("scroll")
		}
	};
		
	const headerObserver = new IntersectionObserver(callback)
	headerObserver.observe(headerElem)
	*/
	//==================ФУКНЦИЯ ДЛЯ ПРОВЕРКИ НА КАКОМ МЫ УСТРОЙСТВЕ=============================================================================================================================================================================================================================================================================
	/*if (isMobile.any()) {
		document.body.classList.add("_touch")
	} else {
		document.body.classList.add("_pc")
	}*/

	//========================УБИРАЕМ=PLACEHOLDER=У=INPUT========================================================================================================================
	const inputs = document.querySelectorAll("[data-input]");
	if (inputs.length > 0) {
		for (let index = 0; index < inputs.length; index++) {
			const element = inputs[index];
			let inputPlaceholder = element.placeholder;
			element.addEventListener("focusin", function (e) {
				element.classList.add("active")
				element.placeholder = '';
			})
			element.addEventListener("focusout", function (e) {
				element.classList.remove("active")
				element.placeholder = inputPlaceholder;
			})
		}
	}
	//=======================КАСТОМНЫЙ=SELECT========================================================================================================================================================================================================================================================================

	//=============================HEADER==============================================================================================================================================

	//===========СКРОЛЛИМ ХЕДЕР====================================================================================================================================================================================================================================================================================
	window.addEventListener("scroll", function (e) {
		if (document.querySelector(".header") && document.querySelector(".page")) {
			let header = document.querySelector(".header")
			let block = document.querySelector(".page")
			let offSet = block.clientHeight;
			let offSetTop = block.getBoundingClientRect().top;
			let cf = 12;

			if (window.pageYOffset > (offSet - offSetTop) / cf) {
				header.classList.add("scroll")
				if (document.querySelector(".full-screen")) {
					document.querySelector(".full-screen").classList.add("scroll")
				}
			} else {
				header.classList.remove("scroll")
				if (document.querySelector(".full-screen")) {
					document.querySelector(".full-screen").classList.remove("scroll")
				}
			}
		}
	})
	//===============================================================================================================================================================================================================================================================================================


	//=======================<ПОИСК>========================================================================================================================================================================================================================================================================
	const search = document.querySelector(".main-header__search-form");
	const searchLink = document.querySelectorAll(".main-header__search-icon-open")[1];
	if (window.innerWidth <= 767) {
		if (search && searchLink) {
			searchLink.addEventListener("click", openSearch);
			function openSearch(e) {
				search.classList.toggle("active");
			}
		}
	}


	//========================ВЫПАДАЮЩИЙ СПИСОК  В ШАПКЕ=======================================================================================================================================================================================================================================================================
	const subListLink = document.querySelectorAll(".sub-list-link");
	if (window.innerWidth <= 992) {
		if (subListLink.length > 0) {
			for (let index = 0; index < subListLink.length; index++) {
				const element = subListLink[index];
				element.addEventListener("click", function (e) {

					let subList = element.querySelector(".sub-list");
					if (!e.target.closest(".sub-list")) {
						subList.classList.toggle("active")
						element.querySelector("a.menu-header__link").classList.toggle("active")
					}
				})
			}
		}
	}

	//=========================BURGER-MENU======================================================================================================================================================================================================================================================================
	const burgerLink = document.querySelector(".main-header__burger");
	if (window.innerWidth <= 767) {
		if (burgerLink) {
			burgerLink.addEventListener("click", function (e) {
				const burgerMenu = document.querySelector(".burger-menu");
				burgerLink.classList.toggle("active")
				document.body.classList.toggle("lock-scroll")
				if (burgerMenu) {
					burgerMenu.classList.toggle("active")


				}

			})
		}
	}
	//==========================СЛАЙДЕР БАННЕРОВ=====================================================================================================================================================================================================================================================================

	if (document.querySelector(".slider-full-screen__main-slider")) {
		let bannersSlider = new Swiper(".slider-full-screen__main-slider", {
			watchOverflow: true,
			slidesPerview: 1,
			nested: true,
			observer: true,
			observeParents: true,
			observeChildrens: true,
			pagination: {
				el: ".main-slider-full-screen__dotts",
				clickable: true,
				type: 'bullets',
			},
			navigation: {
				prevEl: ".main-slider-full-screen__arrow-left",
				nextEl: ".main-slider-full-screen__arrow-right",
			},
			//autoHeight: true,
		})
	}
	if (document.querySelector(".slider-full-screen__mini-slider")) {
		let miniBannersSlider = new Swiper(".slider-full-screen__mini-slider", {
			watchOverflow: true,
			slidesPerview: 1,
			nested: true,
			observer: true,
			observeParents: true,
			observeChildrens: true,
			pagination: {
				el: ".mini-slider-full-screen__dotts",
				clickable: true,
				type: 'bullets',
			},
			navigation: {
				prevEl: ".mini-slider-full-screen__arrow-left",
				nextEl: ".mini-slider-full-screen__arrow-right",
			},
			//autoHeight: true,
		})
	}


	//==========================СЛАЙДЕР КАРТИНОК ВНУТРИ ТОВАРОВ=====================================================================================================================================================================================================================================================================
	if (document.querySelector(".item-products__image-slider.swiper-container")) {
		let sliderImagesOFproduct = new Swiper(".item-products__image-slider", {
			nested: true,
			watchOverflow: true,
			observer: true,
			observeChildrens: true,
			observeParents: true,

			pagination: {
				el: '.item-products__dotts',
				clickable: true,
				type: 'bullets',
			},
		})
	}
	if (document.querySelector(".sales-hits__products.swiper-container")) {

		let sliderProducts = new Swiper(".products", {

			slidesPerView: 4,
			slidesPerGroup: 1,
			spaceBetween: 20,
			nested: true,
			watchOverflow: true,
			observer: true,
			observeChildrens: true,
			observeParents: true,
			allowTouchMove: false,
			breakpoints: {
				1152: {
					slidesPerView: 4,

				},
				992: {
					slidesPerView: 3,

				},
				767: {
					slidesPerView: 2,
				},
				320: {
					slidesPerView: 1,
					spaceBetween: 10,
					allowTouchMove: true,
				},
			},
			navigation: {
				prevEl: ".products__arrow-left",
				nextEl: ".products__arrow-right",
			},
			pagination: {
				el: '.products__dotts',
				clickable: true,
				type: 'bullets',
			},
			autoHeight: true,
		})
	}
	/*
	const sliderOFproducts = document.querySelectorAll(".products__slide")
	if (sliderOFproducts.length > 0 && sliderProducts) {
	
		sliderOFproducts.forEach((item) => {
			item.addEventListener("mouseenter", function (e) {
				removeHeight(e);
			})
			item.addEventListener("mouseleave", function (e) {
				addHeight(e)
			})
		})
	
		function removeHeight(e) {
			for (let index = 0; index < sliderProducts.length; index++) {
				const element = sliderProducts[index];
	
				element.params.autoHeight = false;
	
	
			}
		}
		function addHeight(e) {
			for (let index = 0; index < sliderProducts.length; index++) {
				const element = sliderProducts[index];
	
				element.params.autoHeight = true;
	
			}
		}
	}
	*/
	//==========================PAGE=====================================================================================================================================================================================================================================================================

	//=========================СКРЫВАЕМ ТЕКСТ======================================================================================================================================================================================================================================================================
	const texts = document.querySelectorAll(".item-tovars__text");
	const readMoreButtons = document.querySelectorAll(".item-tovars__read-more-button");

	if (texts.length > 0 && readMoreButtons.length > 0) {
		for (let index = 0; index < texts.length; index++) {
			const element = texts[index];
			let getCompStyle = getComputedStyle(element);

			if (getCompStyle.height == 215 + 'px') {
				element.nextElementSibling.classList.add('active')

			}


		}

		for (let index = 0; index < readMoreButtons.length; index++) {
			const element = readMoreButtons[index];
			element.addEventListener('click', function (e) {

				let parentButton = element.closest(".tovars__item");
				parentButton.querySelector(".item-tovars__text").classList.toggle("active")
			})
			/*
			function removeClasses() {
				const texts = document.querySelectorAll(".item-tovars__text.active");
				for (let index = 0; index < texts.length; index++) {
					const element = texts[index];
					element.classList.remove("active")
		
				}
			}
			*/
		}
	}




	//=======================ВХОД/РЕГИСТРАЦИЯ========================================================================================================================================================================================================================================================================


	const regEnt = document.querySelector(".menu-header__registration-entrance");
	if (regEnt) {
		regEnt.addEventListener("click", function (e) {
			document.body.classList.add("scroll-lock")
		})
		const closePopup = document.querySelectorAll(".popup__close");
		for (let index = 0; index < closePopup.length; index++) {
			const element = closePopup[index];
			element.addEventListener("click", function (e) {



				document.body.classList.remove("scroll-lock")

			})


		}
	}


	//================================СКРЫВАЕМ ПОКАЗЫВАЕМ ПАРОЛЬ В ФОРМЕ===============================================================================================================================================================================================================================================================
	const iconsPassword = document.querySelectorAll(".form-popup__ico");
	if (iconsPassword.length > 0) {
		for (let index = 0; index < iconsPassword.length; index++) {
			const iconPassword = iconsPassword[index];
			iconPassword.addEventListener("click", function (e) {
				if (iconPassword.classList.contains("icon-eye-open")) {
					iconPassword.classList.remove("icon-eye-open")
					iconPassword.classList.add("icon-eye-lock")
					let iconParent = iconPassword.closest(".form-popup__item")
					iconParent.querySelector("input").focus()
					iconParent.querySelector("input").type = 'password';

					e.preventDefault()
				} else if (iconPassword.classList.contains("icon-eye-lock")) {
					iconPassword.classList.remove("icon-eye-lock")
					iconPassword.classList.add("icon-eye-open")
					let iconParent = iconPassword.closest(".form-popup__item")
					iconParent.querySelector("input").focus()
					iconParent.querySelector("input").type = 'text';

					e.preventDefault()
				}

			})
		}
	}
	const labelsInputs = document.querySelectorAll(".form-popup__label");
	const inputsLabels = document.querySelectorAll(".form-popup__input");
	if (labelsInputs.length > 0 && inputsLabels.length > 0) {
		for (let index = 0; index < inputsLabels.length; index++) {
			const inputLabel = inputsLabels[index];
			inputLabel.addEventListener("click", function (e) {

				inputLabel.addEventListener("blur", function (e) {
					if (inputLabel.value != 0) {
						inputLabel.nextElementSibling.classList.add("active")
					}
				})
				inputLabel.addEventListener("blur", function (e) {
					if (inputLabel.value == 0) {
						inputLabel.nextElementSibling.classList.remove("active")
					}
				})
			})

			document.addEventListener("DOMcontentloaded", function (e) {
				if (inputLabel.value != 0) {
					inputLabel.nextElementSibling.classList.add("active")
				}

			})

		}

	}
	const labelsInputsInConsultation = document.querySelectorAll(".form-consultation__label");
	const inputsLabelsInConsultation = document.querySelectorAll(".form-consultation__input");
	if (labelsInputsInConsultation.length > 0 && inputsLabelsInConsultation.length > 0) {
		for (let index = 0; index < inputsLabelsInConsultation.length; index++) {
			const inputLabel = inputsLabelsInConsultation[index];
			inputLabel.addEventListener("click", function (e) {
				inputLabel.addEventListener("blur", function (e) {
					if (inputLabel.value != 0) {
						inputLabel.nextElementSibling.classList.add("active")
					}

				})
				inputLabel.addEventListener("blur", function (e) {
					if (inputLabel.value == 0) {
						inputLabel.nextElementSibling.classList.remove("active")
					}

				})
			})
			document.addEventListener("DOMcontentloaded", function (e) {
				if (inputLabel.value != 0) {
					inputLabel.nextElementSibling.classList.add("active")
				}

			})

		}

	}


	const labelsInputsInContacts = document.querySelectorAll(".form-contacts__label");
	const inputsLabelsInContacts = document.querySelectorAll(".form-contacts__input");
	if (labelsInputsInContacts.length > 0 && inputsLabelsInContacts.length > 0) {
		for (let index = 0; index < inputsLabelsInContacts.length; index++) {
			const inputLabel = inputsLabelsInContacts[index];
			inputLabel.addEventListener("click", function (e) {

				inputLabel.nextElementSibling.classList.add("active")


				inputLabel.addEventListener("blur", function (e) {
					if (inputLabel.value != 0) {
						inputLabel.nextElementSibling.classList.add("active")
					}

				})
				inputLabel.addEventListener("blur", function (e) {
					if (inputLabel.value == 0) {
						inputLabel.nextElementSibling.classList.remove("active")
					}

				})
			})
			document.addEventListener("DOMcontentloaded", function (e) {
				if (inputLabel.value != 0) {
					inputLabel.nextElementSibling.classList.add("active")
				}

			})

		}

	}

	//==================================СТИЛИЗАЦИЯ CHECKBOX=============================================================================================================================================================================================================================================================
	const checkbox = document.querySelectorAll(".form-popup__checkbox-body");

	checkbox.forEach((check) => {
		const inputCheckbox = check.querySelector("input")
		if (inputCheckbox.checked == true) {
			check.classList.add("active")
		}
		check.addEventListener("click", function (e) {
			if (check.classList.contains("active")) {
				inputCheckbox.checked == false
			} else {
				inputCheckbox.checked == true
			}
			document.querySelectorAll(".form-popup__checkbox-label").forEach((item) => {
				item.classList.toggle("icon-check-mark")
			})
			check.classList.toggle("active")
			if (!check.classList.contains("active")) {

				document.querySelectorAll(".form-popup__button").forEach((item) => {
					if (!item.classList.contains("not--disabled")) {
						item.classList.add("disabled")
					}
				})
			} else {
				document.querySelectorAll(".form-popup__button").forEach((item) => {
					item.classList.remove("disabled")
				})
			}
		})
		if (!check.classList.contains("active")) {

			document.querySelectorAll(".form-popup__button").forEach((item) => {
				if (!item.classList.contains("not--disabled")) {
					item.classList.add("disabled")
				}
			})
		} else {
			document.querySelectorAll(".form-popup__button").forEach((item) => {
				if (!item.classList.contains("not--disabled")) {
					item.classList.remove("disabled")
				}
			})
		}
	})
	//================СТИЛИЗАЦИЯ CHECKBOX В ФИЛЬТРЕ===============================================================================================================================================================================================================================================================================
	const filterCheckbox = document.querySelectorAll(".item-filter-sidebar__brend");
	if (filterCheckbox.length > 0) {
		for (let index = 0; index < filterCheckbox.length; index++) {
			const checkbox = filterCheckbox[index];
			let checkboxInput = checkbox.querySelector("input")
			let checkboxLabel = checkbox.querySelector("label")
			if (checkboxInput.checked == true) {
				checkbox.classList.add("_active")
			}
			checkbox.addEventListener("click", function (e) {


				if (checkbox.classList.contains("_active")) {
					checkbox.classList.remove("_active")
					checkboxInput.checked == false
				} else {
					checkbox.classList.add("_active")
					checkboxInput.checked == true
				}

			})


		}
	}
	//================КОЛВО БРЕНДОВ===============================================================================================================================================================================================================================================================================
	const brendsFilter = document.querySelectorAll(".item-filter-sidebar__brends");
	if (brendsFilter.length > 0) {
		for (let index = 0; index < brendsFilter.length; index++) {
			const brendFilter = brendsFilter[index];
			const brendsQuantityFilter = brendFilter.querySelectorAll(".item-filter-sidebar__brend");
			if (brendsQuantityFilter.length > 0) {
				if (brendsQuantityFilter.length > 5) {
					brendFilter.querySelector(".item-filter-sidebar__link").classList.add("_active")
				}
				if (brendFilter.querySelector(".item-filter-sidebar__link")) {
					brendFilter.querySelector(".item-filter-sidebar__link").addEventListener("click", openFilters);
					function openFilters(e) {
						brendFilter.classList.toggle("_open")
					}
				}
			}
		}
	}
	//===================СБРАСЫВАЕМ ФИЛЬТРЫ============================================================================================================================================================================================================================================================================
	const resetFilters = document.querySelectorAll(".filter-sidebar__reset");
	if (resetFilters.length > 0) {
		for (let index = 0; index < resetFilters.length; index++) {
			const resetFilter = resetFilters[index];
			resetFilter.addEventListener("click", resetAllfilters);
			function resetAllfilters(e) {
				document.querySelectorAll("input.item-filter-sidebar__input").forEach((item) => {
					item.value = '';
				})
				document.querySelectorAll(".item-filter-sidebar__brend").forEach((item) => {
					item.classList.remove("_active")
				})
				alert("Все фильтры сброшены.")
				e.preventDefault()
			}
		}
	}
	//===============================================================================================================================================================================================================================================================================================
	if (document.querySelector(".sales-hit-sidebar__products.swiper-container")) {
		new Swiper(".sales-hit-sidebar__products", {
			slidesPerGroup: 1,
			nested: true,
			watchOverflow: true,
			observer: true,
			observeChildrens: true,
			observeParents: true,
			spaceBetween: 10,
			slidesPerView: 1,
			navigation: {
				prevEl: ".products__arrow-left",
				nextEl: ".products__arrow-right",
			},
		})
	}
	//=============СЛАЙДЕР КАТЕГОРИЙ==================================================================================================================================================================================================================================================================================
	if (document.querySelector(".categoryes__slider.swiper-container")) {
		let swiperCategoryes = new Swiper(".categoryes__slider", {


			slidesPerGroup: 1,
			nested: true,
			watchOverflow: true,
			observer: true,
			observeChildrens: true,
			observeParents: true,
			spaceBetween: 10,
			breakpoints: {
				1440: {
					slidesPerView: 4,
				},
				992: {
					slidesPerView: 3,
				},
				600: {
					slidesPerView: 2,
				},
				320: {
					slidesPerView: 1,
				},
			},
			navigation: {
				prevEl: '.categoryes__arrow-left',
				nextEl: '.categoryes__arrow-right',
			},
		})
	}
	//==============СЛАЙДЕР БРЕНДОВ=================================================================================================================================================================================================================================================================================
	if (document.querySelector(".brends-slider__slider.swiper-container")) {
		new Swiper('.brends-slider__slider', {
			slidesPerGroup: 1,
			nested: true,
			watchOverflow: true,
			observer: true,
			observeChildrens: true,
			observeParents: true,
			spaceBetween: 15,
			loop: true,
			//autoHeight: true,
			breakpoints: {
				1440: {
					slidesPerView: 4,
				},
				992: {
					slidesPerView: 3,
				},
				600: {
					slidesPerView: 2,
				},
				320: {
					slidesPerView: 1,
				},
			},
			navigation: {
				prevEl: '.brends-slider__arrow-left',
				nextEl: '.brends-slider__arrow-right',
			},
		})
	}

	//===============================================================================================================================================================================================================================================================================================
	if (window.innerWidth <= 992) {
		const footerBody = document.querySelector('.footer__body');
		const menuFooterIcons = document.querySelector('.menu-footer__icons');
		if (footerBody && menuFooterIcons) {
			footerBody.after(menuFooterIcons)
		}
	}


	//========================ДЕЛАЕМ ВАЛИДАЦИЮ НА EMAIL (пытаемся)=======================================================================================================================================================================================================================================================================
	const formValid = document.querySelectorAll("[data-form]");
	const inputValid = document.querySelectorAll("[data-validInput]")

	if (formValid.length > 0 && inputValid.length > 0) {
		for (let index = 0; index < formValid.length; index++) {
			const element = formValid[index];
			element.addEventListener("submit", function (e) {
				for (let index = 0; index < inputValid.length; index++) {
					const inputValidTest = inputValid[index];
					if (emailTest(inputValidTest)) {
						alert('Неверно введён E-mail');
					} else {
						inputValidTest.classList.add("_passed")
					}
					inputValidTest.addEventListener("focusin", function (e) {
						//  .......
					})
				}
				e.preventDefault()
			})
		}
	}

	//Функция для проверки
	function emailTest(input) {
		return /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i.test(input.value);
	}
	//=============СЛАЙДЕР ПРОДУКТА=================================================================================================================================================================================================================================================================================='
	if (document.querySelector(".product__image-slider.swiper-container")) {
		let sliderProduct = new Swiper(".product__image-slider", {
			slidesPerGroup: 1,
			nested: true,
			watchOverflow: true,
			observer: true,
			observeChildrens: true,
			observeParents: true,
			spaceBetween: 24,
			slidesPerView: 1,
			navigation: {
				prevEl: ".product-image-slider__arrow-left",
				nextEl: ".product-image-slider__arrow-right",
			},
			pagination: {
				el: ".product-image-slider__dotts",
				clickable: true,
			},
			breakpoints: {
				1152: {
					direction: 'horizontal',
				},
				767: {
					direction: 'vertical',

				},
			},
			thumbs: {
				swiper: {
					el: ".product__image-mini-slider.swiper-container",
					slidesPerGroup: 1,
					nested: true,
					watchOverflow: true,
					observer: true,
					observeChildrens: true,
					observeParents: true,
					spaceBetween: 24,
					slidesPerView: 3,

					breakpoints: {
						1152: {
							direction: 'horizontal',
							spaceBetween: 24,
						},
						767: {
							direction: 'vertical',
							slidesPerView: 4,
							spaceBetween: 0,

						},
					},
					navigation: {
						prevEl: ".product-image-mini-slider__arrow-left",
						nextEl: ".product-image-mini-slider__arrow-right",
					},
				},

			},
		})
	}

	//===============================================================================================================================================================================================================================================================================================
	const moreCharacteristicks = document.querySelector(".specify-product__link");
	if (moreCharacteristicks) {
		moreCharacteristicks.addEventListener("click", function (e) {
			if (document.querySelectorAll(".specify-product__item").length >= 3) {
				document.querySelector(".specify-product__items").classList.toggle("_active")
			}
			e.preventDefault()
		})
	}





	//===============================================================================================================================================================================================================================================================================================
	const textInProduct = document.querySelector(".item-product-main-about__text");
	const buttonInProduct = document.querySelector(".item-product-main-about__link");

	if (textInProduct && buttonInProduct) {
		buttonInProduct.addEventListener("click", function (e) {
			let textInProductStyle = getComputedStyle(textInProduct)
			if (textInProductStyle.height == 100 + 'px') {
				textInProduct.classList.add("_active")
			} else {
				textInProduct.classList.remove("_active")
			}
			e.preventDefault()
		})

	}

	//===============================================================================================================================================================================================================================================================================================
	const textINproductAboutLink = document.querySelectorAll(".item-product-main-reviews-item__link");
	const textINproductAboutText = document.querySelectorAll(".item-product-main-reviews-item__text");

	if (textINproductAboutLink.length > 0 && textINproductAboutText.length > 0) {
		for (let index = 0; index < textINproductAboutLink.length; index++) {
			const element = textINproductAboutLink[index];
			let parent = element.closest(".item-product-main-reviews__item");
			let text = parent.querySelector(".item-product-main-reviews-item__text");
			let textStyle = getComputedStyle(text);
			if (textStyle.height == 100 + 'px') {
				element.classList.add("_active")
			}
			element.addEventListener("click", function (e) {
				let parent = element.closest(".item-product-main-reviews__item");
				let text = parent.querySelector(".item-product-main-reviews-item__text");
				let textStyle = getComputedStyle(text);
				if (textStyle.height == 100 + 'px') {

					text.classList.add("_active")

				} else {
					text.classList.remove("_active")

				}
				e.preventDefault()
			})
		}
	}


	//=========СЛАЙДЕР СЕРТИФИКАТОВ======================================================================================================================================================================================================================================================================================
	if (document.querySelector(".cerfiticates__slider.swiper-container")) {
		new Swiper(".cerfiticates__slider", {
			slidesPerGroup: 1,
			nested: true,
			watchOverflow: true,
			observer: true,
			observeChildrens: true,
			observeParents: true,
			spaceBetween: 20,

			breakpoints: {
				1024: {
					slidesPerView: 4,
				},
				767: {
					slidesPerView: 3,
				},
				479: {
					slidesPerView: 2,
				},
				320: {
					slidesPerView: 1,
				},
			},
			navigation: {
				prevEl: ".cerfiticates__arrow-left",
				nextEl: ".cerfiticates__arrow-right",
			},
			pagination: {
				el: ".cerfiticates__dotts",
				clickable: true,
			},
		})
	}


	//================СЛАЙДЕР СОТРУДНИКОВ===============================================================================================================================================================================================================================================================================
	if (document.querySelector(".staffs__slider.swiper-container")) {
		new Swiper(".staffs__slider", {
			slidesPerGroup: 1,
			nested: true,
			watchOverflow: true,
			observer: true,
			observeChildrens: true,
			observeParents: true,
			spaceBetween: 20,
			autoHeight: true,
			breakpoints: {
				1024: {
					slidesPerView: 4,
				},
				767: {
					slidesPerView: 3,
				},
				479: {
					slidesPerView: 2,
				},
				320: {
					slidesPerView: 1,
				},
			},
			navigation: {
				prevEl: ".staffs__arrow-left",
				nextEl: ".staffs__arrow-right",
			},
			pagination: {
				el: ".staffs__dotts",
				clickable: true,
			},
		})
	}
	//===============СЛАЙДЕР ОТЗЫВОВ================================================================================================================================================================================================================================================================================

	if (document.querySelector(".reviews__columns.swiper-container")) {
		let reviewsSlider = new Swiper(".reviews__columns", {

			nested: true,
			watchOverflow: true,
			observer: true,
			observeChildrens: true,
			observeParents: true,
			spaceBetween: 0,
			autoHeight: true,
			slidesPerView: 1,

			navigation: {
				prevEl: ".reviews__arrow-left",
				nextEl: ".reviews__arrow-right",
			},
			pagination: {
				el: ".reviews__dotts",
				clickable: true,

				renderBullet: function (index, className) {
					return '<span class="' + className + '">' + (index + 1) + '</span>';
					//return '<span class="' + className + '">' + (index + 1) + '</span>';
					if (index != 4) {

					} else {
						return '<span class="' + className + '">' + ("...") + '</span>';
					}
				}
			},
		})
		/*
		if (document.querySelector(".reviews__dotts")) {

			let dotts = document.querySelector(".reviews__pagination");
			let items = dotts.querySelectorAll(".swiper-pagination-bullet")


			let arrowLeft = document.querySelector(".reviews__arrow-left");
			let arrowRight = document.querySelector(".reviews__arrow-right");

			for (let index = 0; index < items.length; index++) {
				const element = items[index];
				element.style.display = 'flex';
			}

			for (let index = 5; index < items.length; index++) {
				const element = items[index];
				element.style.display = 'none'
			}


			items = Array.from(items).filter(item => {
				return item.style.display != 'none';
			})



			for (let index = 0; index < items.length; index++) {
				const item = items[index];
				item.addEventListener("click", dottsFunction)
				function dottsFunction(e) {
					for (let index = 0; index != e.target.innerHTML - 1; index++) {
						const element = items[index];
						element.style.display = 'none';

					}
					e.target.nextElementSibling.style.display = 'flex';
					//arrowRight(e.target.innerHTML)

				}
			}
			arrowLeft.addEventListener("click", arrowLeftFunction)
			function arrowLeftFunction(e) {
				let activeBullet = dotts.querySelector(".swiper-pagination-bullet-active");

				activeBullet.style.display = 'flex';
				items = Array.from(items).filter(item => {
					return item.style.display == 'flex';
				})

				items[items.length - 1].style.display = 'none'
				items = Array.from(items).filter(item => {
					return item.style.display == 'flex';
				})
				activeBullet.previousElementSibling.style.display = 'flex';
				items = Array.from(items).filter(item => {
					return item.style.display == 'flex';
				})



			}


			arrowRight.addEventListener("click", arrowRightFunction)
			function arrowRightFunction(e) {
				let activeBullet = dotts.querySelector(".swiper-pagination-bullet-active");

				items = Array.from(items).filter(item => {
					return item.style.display != 'none';
				})
				console.log(items);
				activeBullet.style.display = 'flex';

				if (activeBullet.nextElementSibling) {
					activeBullet.nextElementSibling.style.display = 'flex';
				}
				//activeBullet = dotts.querySelector(".swiper-pagination-bullet-active")
				console.log(activeBullet);
				items = Array.from(items).filter(item => {
					return item.style.display != 'none';
				})
				items[0].style.display = 'none'
				console.log(items.length);
			}
		}
		*/
	}


	//===============================================================================================================================================================================================================================================================================================
	const spoller = document.querySelector(".item-openings__open-item");
	const inClose = document.querySelector(".item-openings__link.inClose");
	if (inClose && spoller) {
		if (spoller.hidden == 'true') {
			inClose.classList.remove("_active")
		} else {
			inClose.classList.add("_active")
		}
	}




















	//=================================================================КОРЗИНА==============================================================================================================================================================================================================================
	//===========================================================КОРЗИНА====================================================================================================================================================================================================================================
	//================================================================КОРЗИНА===============================================================================================================================================================================================================================
	//=============================================================КОРЗИНА==================================================================================================================================================================================================================================
	//===========================================================КОРЗИНА====================================================================================================================================================================================================================================
	//===============================================================КОРЗИНА================================================================================================================================================================================================================================
	//===============================================================КОРЗИНА================================================================================================================================================================================================================================
	//============================================================КОРЗИНА===================================================================================================================================================================================================================================

	const closePopupCatalog = document.querySelectorAll(".content-catalog__close");
	const openPopupCatalog = document.querySelectorAll(".catalog__open");
	const fixedBlockCatalog = document.querySelectorAll(".fixed-menu__link");
	function closePopup() {
		const closeAllPopaps = document.querySelectorAll(".closePopup");
		if (closeAllPopaps.length > 0) {
			for (let index = 0; index < closeAllPopaps.length; index++) {
				const element = closeAllPopaps[index];
				element.addEventListener("click", function (e) {

					document.body.classList.remove("scroll-lock")

				})
			}
		}


		if (closePopupCatalog && openPopupCatalog) {
			openPopupCatalog.forEach((item) => {
				item.addEventListener("click", function (e) {
					document.body.classList.add("scroll-lock")

				})
			})
			fixedBlockCatalog.forEach(item => {
				item.addEventListener("click", function (e) {
					document.body.classList.add("scroll-lock")
				})
			})
			closePopupCatalog.forEach((item) => {
				item.addEventListener("click", function (e) {
					document.body.classList.remove("scroll-lock")
				})
			})
		}
	}
	//========================================ДОБАВЛЯЕМ В КОРЗИНУ======================================================================================================================================================================================================================================================
	const cartLinks = document.querySelectorAll('.item-products__link');
	const columnsWrapper = document.querySelector(".content-catalog__columns");
	if (cartLinks.length > 0) {
		for (let index = 0; index < cartLinks.length; index++) {
			const cartLink = cartLinks[index];
			if (document.querySelector(".content-catalog__empty")) {
				const contentCatalogBody = document.querySelector(".content-catalog__body");
			}
			cartLink.addEventListener("click", function (e) {
				if (cartLink.closest(".products__item")) {
					let cartLinkParent = cartLink.closest(".products__item");
					let contentImage = cartLinkParent.querySelector(".item-products__image img");
					let contentImageSrc = contentImage.getAttribute("src")
					let contentTitle = cartLinkParent.querySelector(".item-products__title").innerHTML;
					let contentPrice = cartLinkParent.querySelector(".item-products__price m p").innerHTML;
					columnsWrapper.insertAdjacentHTML(
						"beforeend",
						`		<article class="content-catalog__column">
					<div class="content-catalog__item item-content-catalog">
						<div class="item-content-catalog__image">
						<img src="${contentImageSrc}" alt="image">
						</div>
						<h2 class="item-content-catalog__title">
							${contentTitle}
						</h2>
						<div class="item-content-catalog__quantity">
							<button type="button" class="item-content-catalog__minus">-</button>
							<span>1</span>
							<button type="button" class="item-content-catalog__plus">+</button>
						</div>
						<div class="item-content-catalog__price">
							<span> ${contentPrice}</span>
							<p> ₽</p>
						</div>
						<button type="button" class="item-content-catalog__delete icon-close"></button>
					</div>
				</article>`
					)
				} else if (cartLink.closest(".product__body")) {
					let cartLinkParent = cartLink.closest(".product__body");
					let quantity = cartLinkParent.querySelector(".settings-product__quantity span").innerHTML
					let contentImage = cartLinkParent.querySelector(".product-image-slide__image img");
					let contentImageSrc = contentImage.getAttribute("src")
					let contentTitle = cartLinkParent.querySelector(".product__title").innerHTML;
					let contentPrice = cartLinkParent.querySelector(".settings-product__price span").innerHTML;
					columnsWrapper.insertAdjacentHTML(
						"beforeend",
						`		<article class="content-catalog__column">
					<div class="content-catalog__item item-content-catalog">
						<div class="item-content-catalog__image">
						<img src="${contentImageSrc}" alt="image">
						</div>
						<h2 class="item-content-catalog__title">
							${contentTitle}
						</h2>
						<div class="item-content-catalog__quantity">
							<button type="button" class="item-content-catalog__minus">-</button>
							<span>${quantity}</span>
							<button type="button" class="item-content-catalog__plus">+</button>
						</div>
						<div class="item-content-catalog__price">
							<span> ${parseInt(contentPrice)}</span>
							<p> ₽</p>
						</div>
						<button type="button" class="item-content-catalog__delete icon-close"></button>
					</div>
				</article>`
					)
				}






				checkQuantityProducts()

				catalog()
				calcCartCounter()
				calcTotal()
				e.preventDefault()
			})
		}
	}
	//==============================СЧИТАЕМ КОЛ-ВО И СТОИМОСТЬ В КАТАЛОГ ТОВАРА=================================================================================================================================================================================================================================================================
	let columnsINcatalog = document.querySelectorAll(".content-catalog__column");
	let counterColumns = document.querySelector(".content-catalog__counter m p");
	let counterSummColumns = document.querySelector(".content-catalog__counter m span");
	let counterTotal = document.querySelector(".content-catalog__total span");
	function calcTotal() {

		let allPrice = document.querySelectorAll(".item-content-catalog__price span")
		s = 0
		for (let index = 0; index < allPrice.length; index++) {
			const element = allPrice[index].innerHTML;
			s = s + Number(element)
			counterSummColumns.innerHTML = s
			counterTotal.innerHTML = s
		}
		columnsINcatalog = document.querySelectorAll(".content-catalog__column");
		counterColumns.innerHTML = columnsINcatalog.length


	}
	calcTotal()
	function catalog() {
		document.querySelectorAll(".content-catalog__item").forEach((item) => {
			const counterQuantity = item.querySelector(".item-content-catalog__quantity span").innerHTML;
			let count = counterQuantity
			//let priceDefault = item.querySelector(".item-content-catalog__price span").innerHTML;;
			const reduce = item.querySelector(".item-content-catalog__minus")
			const increase = item.querySelector(".item-content-catalog__plus")
			if (reduce && increase) {
				reduce.addEventListener("click", function (e) {
					reduceCounter(reduce);


				})
				increase.addEventListener("click", function (e) {
					increaseCounter(increase);

				})
				function increaseCounter(increase) {
					count++
					increase.previousElementSibling.innerHTML = count;
					//let price = item.querySelector(".item-content-catalog__price span")
					//price.innerHTML = priceStart * increase.previousElementSibling.innerHTML

					let allPrice = document.querySelectorAll(".item-content-catalog__price span")
					s = 0
					for (let index = 0; index < allPrice.length; index++) {
						const element = allPrice[index].innerHTML;
						s = s + Number(element)
						counterSummColumns.innerHTML = s
						counterTotal.innerHTML = s

					}

				}

				function reduceCounter(reduce) {
					if (reduce.nextElementSibling.innerHTML != 0) {
						count--
						reduce.nextElementSibling.innerHTML = count;
						//let price = item.querySelector(".item-content-catalog__price span")
						//price.innerHTML = price.innerHTML - priceStart

						let allPrice = document.querySelectorAll(".item-content-catalog__price span")
						s = s - priceDefault
						counterSummColumns.innerHTML = s
						counterTotal.innerHTML = s

					}
				}
			}


		})
		calcCartCounter(

		)
		calcTotal()
		checkQuantityProducts()
	}
	catalog()
	//===================================СЧИТАЕМ КОЛ-ВО============================================================================================================================================================================================================================================================
	function countCatalog() {
		const lengthColumnsIncatalog = document.querySelectorAll(".content-catalog__column");
		const catalogLinks = document.querySelectorAll(".catalog__open");
		if (catalogLinks.length > 0) {
			for (let index = 0; index < catalogLinks.length; index++) {
				const element = catalogLinks[index];
				let counter = element.querySelector("p")
				counter.innerHTML = lengthColumnsIncatalog.length;
			}
		}
	}
	countCatalog()
	//===============================================================================================================================================================================================================================================================================================
	function calcCartCounter() {
		const numberOFelements = document.querySelectorAll(".numberElemets");
		if (numberOFelements.length > 0) {
			numberOFelements.forEach((item) => {

				let itemContent = item.querySelector("p").innerHTML;
				if (itemContent != 0) {

					item.classList.add("active")

				} else {
					item.classList.remove("active")
				}

			})
			checkQuantityProducts()
			countCatalog()
			countScales()
			//catalog()
		}

	}
	calcCartCounter()
	//=====================================ЕСЛИ НЕТУ НЪТОВАРОВ В КАТАЛОГ ТО==========================================================================================================================================================================================================================================================
	function checkQuantityProducts() {
		const tovarsIncatalog = document.querySelectorAll(".content-catalog__column");
		if (tovarsIncatalog.length == 0) {
			document.querySelector(".content-catalog__empty").classList.remove("active")
			document.querySelectorAll(".content-catalog__button")[1].classList.add("hidden-catalog");
			document.querySelector('.content-catalog__total-block').classList.add("hidden-catalog")
			document.querySelector(".content-catalog__counter").classList.add("hidden-catalog")
		} else if (tovarsIncatalog.length > 0) {
			document.querySelector(".content-catalog__empty").classList.add("active")
			document.querySelectorAll(".content-catalog__button")[1].classList.remove("hidden-catalog");
			document.querySelector('.content-catalog__total-block').classList.remove("hidden-catalog")
			document.querySelector(".content-catalog__counter").classList.remove("hidden-catalog")
		}
	}
	checkQuantityProducts()



	//=========================================ИЗБРАННОЕ======================================================================================================================================================================================================================================================
	//=======================================ИЗБРАННОЕ========================================================================================================================================================================================================================================================
	//==========================================ИЗБРАННОЕ=====================================================================================================================================================================================================================================================
	//=====================================ИЗБРАННОЕ==========================================================================================================================================================================================================================================================
	//========================================ИЗБРАННОЕ=======================================================================================================================================================================================================================================================
	//=====================================ИЗБРАННОЕ==========================================================================================================================================================================================================================================================
	//==========================================ИЗБРАННОЕ=====================================================================================================================================================================================================================================================
	//====================================ИЗБРАННОЕ===========================================================================================================================================================================================================================================================

	//===============================================================================================================================================================================================================================================================================================
	//==================================ДЕЛАЕМ ИЗБРАННОЕ=============================================================================================================================================================================================================================================================
	function setBorderBottom() {

		const parentPopup = document.getElementById("popupFavourite")
		const contentFav = parentPopup.querySelectorAll('.popup__favourite-text');
		if (contentFav.length > 1) {
			calcCartCounter()
			for (let index = 0; index < contentFav.length; index++) {
				const element = contentFav[index];
				element.classList.add("active")
			}
		}
	}
	setBorderBottom()
	function addInFavourite() {
		const parentPopup = document.getElementById("popupFavourite")
		const links = document.querySelectorAll(".item-products__action.icon-heart");
		if (links.length > 0) {
			for (let index = 0; index < links.length; index++) {
				const element = links[index];
				element.addEventListener("click", function (e) {
					if (!element.classList.contains("active")) {
						element.classList.add("active")
						getParent(e)

						function getParent(e) {
							if (element.closest(".products__slide")) {
								let parentElement = element.closest(".products__slide");
								let parentElementID = parentElement.getAttribute("id");
								let contentInParentElement = parentElement.querySelector(".item-products__title").innerHTML;
								const contentInFavourite = parentPopup.querySelector(".popup__buttons-fav");
								if (parentElementID && contentInParentElement) {
									contentInFavourite.insertAdjacentHTML(
										'beforebegin',
										`<div class="popup__favourite-text ">
					Вы добавили <a class="closePopup" href="#${parentElementID}">${contentInParentElement}</a> в избранные
				</div>`
									);
								}
							} else if (element.closest(".product__body")) {
								let parentElement = element.closest(".product__body");
								let parentElementID = parentElement.getAttribute("id");
								let contentInParentElement = parentElement.querySelector(".product__title").innerHTML;
								const contentInFavourite = parentPopup.querySelector(".popup__buttons-fav");
								if (parentElementID && contentInParentElement) {
									contentInFavourite.insertAdjacentHTML(
										'beforebegin',
										`<div class="popup__favourite-text ">
					Вы добавили <a class="closePopup" href="#${parentElementID}">${contentInParentElement}</a> в избранные
				</div>`
									);
								}
							}

							setBorderBottom()
							countFav()
							calcCartCounter()
							closePopup()
						}
					} else if (element.classList.contains("active")) {
						element.classList.remove("active");
						deleteParent(e)
						function deleteParent(e) {
							if (element.closest(".products__slide")) {
								let parentElement = element.closest(".products__slide");
								let parentElementID = parentElement.getAttribute("id");
								let contentInFavourite = parentPopup.querySelector(".popup__body")
								contentInFavourite = parentPopup.querySelectorAll(".popup__favourite-text");
								contentInFavourite.forEach((item) => {
									if (item.querySelector('a').getAttribute('href') == '#' + parentElementID) {
										item.remove()
										setBorderBottom()
										countFav()
										calcCartCounter()
										closePopup()
									}
								})
							} else if (element.closest(".product__body")) {
								let parentElement = element.closest(".product__body");
								let parentElementID = parentElement.getAttribute("id");
								let contentInFavourite = parentPopup.querySelector(".popup__body")
								contentInFavourite = parentPopup.querySelectorAll(".popup__favourite-text");
								contentInFavourite.forEach((item) => {
									if (item.querySelector('a').getAttribute('href') == '#' + parentElementID) {
										item.remove()
										setBorderBottom()
										countFav()
										calcCartCounter()
										closePopup()
									}
								})
							}

							setBorderBottom()
							countFav()
							calcCartCounter()
							closePopup()
						}
					}
					e.preventDefault()
				})
			}
		}
	}
	function countFav() {
		const parentPopup = document.getElementById("popupFavourite")
		const lengthColumnsIncatalog = parentPopup.querySelectorAll(".popup__favourite-text");
		const catalogLinks = document.querySelectorAll(".fav__open");
		if (catalogLinks.length > 0) {
			for (let index = 0; index < catalogLinks.length; index++) {
				const element = catalogLinks[index];
				let counter = element.querySelector("p")
				counter.innerHTML = lengthColumnsIncatalog.length;
				element.addEventListener("click", function (e) {
					document.body.classList.add("scroll-lock")
				})
			}
		}
	}
	countFav()
	addInFavourite()
	calcCartCounter()
	closePopup()

	//===============================================================================================================================================================================================================================================================================================vo
	//===============================================================================================================================================================================================================================================================================================
	//===============================================================================================================================================================================================================================================================================================
	//===============================================================================================================================================================================================================================================================================================
	//===============================================================================================================================================================================================================================================================================================
	//===============================================================================================================================================================================================================================================================================================
	//===============================================================================================================================================================================================================================================================================================
	//===============================================================================================================================================================================================================================================================================================

	//===============================================================================================================================================================================================================================================================================================
	//==========================================================ДЕЛАЕМ СРАВНЕНИЕ=====================================================================================================================================================================================================================================
	function setBorderBottomInScales() {
		const parentPopup = document.getElementById("popupScales");
		const contentFav = parentPopup.querySelectorAll('.popup__favourite-text');
		if (contentFav.length > 1) {
			for (let index = 0; index < contentFav.length; index++) {
				const element = contentFav[index];
				element.classList.add("active")
			}
		}
	}
	setBorderBottomInScales()
	function addINscales() {
		const parentPopup = document.getElementById("popupScales");
		const links = document.querySelectorAll(".item-products__action.icon-scales");
		if (links.length > 0) {
			for (let index = 0; index < links.length; index++) {

				const element = links[index];
				element.addEventListener("click", function (e) {

					if (parentPopup.querySelectorAll(".popup__favourite-text").length == 2) {
						document.querySelectorAll(".scales__open").forEach((item) => {
							if (!element.classList.contains("active")) {
								item.classList.remove("active")
								item.classList.add("active--scaled")
							} else {
								item.classList.remove("active--scaled")
								item.classList.add("active")
							}

						})
					}
					if (parentPopup.querySelectorAll(".popup__favourite-text").length != 2 && !element.classList.contains("active")) {
						if (!element.classList.contains("active")) {
							element.classList.add("active")
							getParent(e)
						}
						function getParent(e) {
							if (parentPopup.querySelectorAll(".popup__favourite-text").length <= 2) {
								if (element.closest(".products__slide")) {
									let parentElement = element.closest(".products__slide");
									let parentElementID = parentElement.getAttribute("id");
									let contentInParentElement = parentElement.querySelector(".item-products__title").innerHTML;
									const contentInFavourite = parentPopup.querySelector(".popup__buttons-fav");
									if (parentElementID && contentInParentElement) {
										contentInFavourite.insertAdjacentHTML(
											'beforebegin',
											`<div class="popup__favourite-text">
					Вы добавили <a  href="#${[parentElementID]}" class="closePopup">${contentInParentElement} </a> в сравнение
				</div>`
										);
									}
								} else if (element.closest(".product__body")) {
									let parentElement = element.closest(".product__body");
									let parentElementID = parentElement.getAttribute("id");
									let contentInParentElement = parentElement.querySelector(".product__title").innerHTML;
									const contentInFavourite = parentPopup.querySelector(".popup__buttons-fav");
									if (parentElementID && contentInParentElement) {
										contentInFavourite.insertAdjacentHTML(
											'beforebegin',
											`<div class="popup__favourite-text">
					Вы добавили <a  href="#${[parentElementID]}" class="closePopup">${contentInParentElement} </a> в сравнение
				</div>`
										);
									}
								}

								closePopup()
								setBorderBottomInScales()
								countScales()
								calcCartCounter()
							}
							if (parentPopup.querySelectorAll(".popup__favourite-text").length === 2) {
								document.querySelectorAll(".scales__open").forEach((item) => {
									item.classList.remove("active")
									item.classList.add("active--scaled")
								})
								const buttons = parentPopup.querySelector(".popup__buttons-fav");
								if (!document.querySelector(".scale")) {
									buttons.insertAdjacentHTML(
										"afterbegin",
										`<a href="#header" class="popup__button-fav scale">Сравнить</a>`
									)
								}
							}
						}
					} else if (element.classList.contains("active")) {
						element.classList.remove("active");
						deleteParent(e)
						function deleteParent(e) {
							if (element.closest(".products__slide")) {
								let parentElement = element.closest(".products__slide");
								let parentElementID = parentElement.getAttribute("id");
								if (document.querySelector(".scale")) {
									document.querySelector(".scale").remove()
								}
								let contentInFavourite = parentPopup.querySelector(".popup__body")
								contentInFavourite = parentPopup.querySelectorAll(".popup__favourite-text");
								contentInFavourite.forEach((item) => {

									if (item.querySelector('a').getAttribute('href') == '#' + parentElementID) {


										item.remove()
										closePopup()
										setBorderBottomInScales()
										countScales()
										calcCartCounter()
									}
								})
							} else if (element.closest(".product__body")) {
								let parentElement = element.closest(".product__body");
								let parentElementID = parentElement.getAttribute("id");
								if (document.querySelector(".scale")) {
									document.querySelector(".scale").remove()
								}
								let contentInFavourite = parentPopup.querySelector(".popup__body")
								contentInFavourite = parentPopup.querySelectorAll(".popup__favourite-text");
								contentInFavourite.forEach((item) => {

									if (item.querySelector('a').getAttribute('href') == '#' + parentElementID) {


										item.remove()
										closePopup()
										setBorderBottomInScales()
										countScales()
										calcCartCounter()
									}
								})
							}




							closePopup()
							setBorderBottomInScales()
							countScales()
							calcCartCounter()
						}
					}
					e.preventDefault()
				})

			}
		}

	}
	function countScales() {
		const parentPopup = document.getElementById("popupScales");
		const lengthColumnsIncatalog = parentPopup.querySelectorAll(".popup__favourite-text");
		const catalogLinks = document.querySelectorAll(".scales__open");
		if (catalogLinks.length > 0) {
			for (let index = 0; index < catalogLinks.length; index++) {
				const element = catalogLinks[index];
				let counter = element.querySelector("p")
				counter.innerHTML = lengthColumnsIncatalog.length;
				element.addEventListener("click", function (e) {
					document.body.classList.add("scroll-lock")
				})

			}
		}
	}
	closePopup()
	countScales()
	addINscales()
	calcCartCounter()
}
