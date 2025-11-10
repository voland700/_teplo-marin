let slideUp = (target, duration=500) => {

	target.style.transitionProperty = 'height, margin, padding';
	target.style.transitionDuration = duration + 'ms';
	target.style.boxSizing = 'border-box';
	target.style.height = target.offsetHeight + 'px';
	target.offsetHeight;
	target.style.overflow = 'hidden';
	target.style.height = 0;
	target.style.paddingTop = 0;
	target.style.paddingBottom = 0;
	target.style.marginTop = 0;
	target.style.marginBottom = 0;
	window.setTimeout( () => {
				target.style.display = 'none';
				target.style.removeProperty('height');
				target.style.removeProperty('padding-top');
				target.style.removeProperty('padding-bottom');
				target.style.removeProperty('margin-top');
				target.style.removeProperty('margin-bottom');
				target.style.removeProperty('overflow');
				target.style.removeProperty('transition-duration');
				target.style.removeProperty('transition-property');
				//alert("!");
	}, duration);
}

/* SLIDE DOWN */
let slideDown = (target, duration=500) => {

	target.style.removeProperty('display');
	let display = window.getComputedStyle(target).display;
	if (display === 'none') display = 'block';
	target.style.display = display;
	let height = target.offsetHeight;
	target.style.overflow = 'hidden';
	target.style.height = 0;
	target.style.paddingTop = 0;
	target.style.paddingBottom = 0;
	target.style.marginTop = 0;
	target.style.marginBottom = 0;
	target.offsetHeight;
	target.style.boxSizing = 'border-box';
	target.style.transitionProperty = "height, margin, padding";
	target.style.transitionDuration = duration + 'ms';
	target.style.height = height + 'px';
	target.style.removeProperty('padding-top');
	target.style.removeProperty('padding-bottom');
	target.style.removeProperty('margin-top');
	target.style.removeProperty('margin-bottom');
	window.setTimeout( () => {
		target.style.removeProperty('height');
		target.style.removeProperty('overflow');
		target.style.removeProperty('transition-duration');
		target.style.removeProperty('transition-property');
	}, duration);
}

/* TOOGLE */
let slideToggle = (target, duration = 500) => {
	if (window.getComputedStyle(target).display === 'none') {
		return slideDown(target, duration);
	} else {
		return slideUp(target, duration);
	}
}

document.addEventListener('DOMContentLoaded', () => {

	const btnMobailBar = document.getElementById('btnMobailBar');
	btnMobailBar.addEventListener('click', (e)=>{
		e.preventDefault();		
		const mobailBar = document.getElementById('mobailBar');
		mobailBar.classList.toggle('show')
	})

	//закрыть
	const btnMobailClose = document.getElementById('btnMobailClose');
		btnMobailClose.addEventListener('click', (e)=>{
		e.preventDefault()
		const mobailBar = document.getElementById('mobailBar')
		if(mobailBar.classList.contains('show')) mobailBar.classList.remove('show')
		const searchMobail = document.getElementById('searchMobail');
		if(searchMobail.classList.contains('show')) searchMobail.classList.remove('show')
	});

	// search form
	const btnMobailShow = document.getElementById('btnMobailShow');
	btnMobailShow.addEventListener('click', (e)=>{
		e.preventDefault()
		const searchMobail = document.getElementById('searchMobail');
		searchMobail.classList.toggle('show')
	});
	// mobail menu up and down
	document.querySelectorAll('.mobail_btn_menu_chaild').forEach((e) => {
		e.addEventListener('click', (elem)=>{
			elem.preventDefault();
			let btn = elem.currentTarget;
			let icon = btn.firstElementChild;
			let ul = btn.nextElementSibling
			if(icon.classList.contains('icon-chevron-down-thin')){
				icon.classList.replace('icon-chevron-down-thin', 'icon-chevron-up-thin');
				slideDown(ul, 500);					
			}else{
				icon.classList.replace('icon-chevron-up-thin', 'icon-chevron-down-thin');
				slideUp(ul, 500);
			}			

		});
	})
	// slider - swiper.js
	if(document.getElementById('slider')){
		const MainSlider = new Swiper('#slider', {
			enabled:  true,//false - отключает смену слайдов, показывается 1 доступный, удалить или смнить на true
			speed: 1000,
			loop: true,
			parallax: true,
			effect: "fade",
			fadeEffect: {
				crossFade: true
			},
			autoplay: {
				delay: document.getElementById('sliderWruper').dataset.delay ? document.getElementById('sliderWruper').dataset.delay : 5000,
				disableOnInteraction: false,
				pauseOnMouseEnter: true,
			},
			navigation: {
				nextEl: '.swiper-btn-next',
				prevEl: '.swiper-btn-prev',
			},
		});
	}


	if(document.getElementById('brands')){
		const brands = new Swiper('#brands', {
			speed: 500,
				loop: true,
				autoplay: {
					delay: 5000,
					disableOnInteraction: false,
					pauseOnMouseEnter: true,
				},
				breakpoints: {
				320: {
				slidesPerView: 2,
				spaceBetween: 0
				},
					576: {
				slidesPerView: 3,
				spaceBetween: 20
				},
					768: {
				slidesPerView: 3,
				spaceBetween: 20
				},    
				992: {
				slidesPerView: 4,
				spaceBetween: 20
				},   
				1200: {
				slidesPerView: 6,
				spaceBetween: 15
				}
			}
		});
	}

    /*--tabs--*/
	document.querySelectorAll('.advice_li').forEach(function (elem) {
		elem.addEventListener('click', function (li) {
			let elemSelected = li.target.parentElement;	
			let nameAttr = elemSelected.dataset.advice;
			let nameList = document.querySelectorAll('.advice_li');
			let tabsList;
			if (!elemSelected.classList.contains('clicked')) {
				nameList.forEach(function (name) {
					if (name.classList.contains('clicked')) name.classList.remove('clicked');
				});
				elemSelected.classList.add('clicked');
				tabsList = document.querySelectorAll('.advice_wrapper');
				tabsList.forEach(item => {
					item.dataset.tab == nameAttr ? item.classList.add('behold') : item.classList.remove('behold');
				})
			}
		});
	});


		


	if(document.getElementById('filter')){
		let priceRange = document.getElementById('priceRange');
		const input0 = document.getElementById('input-0');
		const input1 = document.getElementById('input-1');
		const inputs = [input0, input1];
		let priceMin = Number(input0.getAttribute('min'));
		let priceMax = Number(input0.getAttribute('max'));
		noUiSlider.create(priceRange, {	
			start: [priceMin, priceMax],
			connect: true,
			priceMin,
			range: {
				'min': priceMin,
				'max': priceMax
			}
		});		
		priceRange.noUiSlider.on('update', function(values, handle){
			inputs[handle].value = Math.round(values[handle]);
		});
		const setRangeSlider = (i, value) => {
			let arr = [null, null];
			arr[i] = value;
			priceRange.noUiSlider.set(arr);
		};
		inputs.forEach((el, index) => {
			el.addEventListener('change', (e) => {
				setRangeSlider(index, e.currentTarget.value);
			});
		});

		document.querySelectorAll('.filter_item_btn').forEach((itemBtn) =>{			
			itemBtn.addEventListener('click', (elem)=>{
				elem.preventDefault();
				const icon = elem.target.nextElementSibling;				
				const parent = icon.parentElement.parentElement;
				const content = parent.querySelector('.filter_content');
				if(icon.classList.contains('icon-chevron-down-light')){
					icon.classList.remove('icon-chevron-down-light');
					icon.classList.add('icon-chevron-up-light');
					slideUp(content, 500);
				} else if(icon.classList.contains('icon-chevron-up-light')){
					icon.classList.remove('icon-chevron-up-light');
					icon.classList.add('icon-chevron-down-light');
					slideDown(content, 500);
				}
				
			});
		})
		
		document.getElementById('filterResetBtn').addEventListener('click', ()=>{
			document.querySelectorAll('.filter_input').forEach((inp)=>{
				if(inp.checked = true) inp.checked = false;				
			})
			priceRange.noUiSlider.reset();
		});
	}

	//*--- Counter for products list  ---*//
	const counter = function () {
		const btns = document.querySelectorAll('.card_counter__btn');
		btns.forEach(btn => {
			btn.addEventListener('click', function () {
				const direction = this.dataset.direction;
				const inp = this.parentElement.querySelector('.card_counter__value');
				const currentValue = +inp.value;
				let newValue;
				if (direction === 'plus') {
					newValue = currentValue + 1;
				} else {
					newValue = currentValue - 1 > 1 ? currentValue - 1 : 1;
				}
				if(typeof newValue !== NaN){
					inp.value =  newValue;
				} else {
					inp.value =  1;
				}
			})
		})
	}
	counter();



	//*--- IMAGES on detail product  ---*//
	if(document.getElementById('thambBlock')){
		const mainImgLink = document.getElementById('mainImgLink');
		const mainImg = document.getElementById('mainImg');

		const gallery = new Swiper("#thambBlock", {
			slidesPerView: 5,
			spaceBetween: 5,
			slidesPerGroup: 1,
			centerInsufficientSlides: true,
			navigation: {
				nextEl: "#ImagesSliderPrev",
				prevEl: "#ImagesSliderNext",
			},
		});

		if(gallery.slides.length <= gallery.params.slidesPerView){
			document.getElementById('ImagesSliderPrev').style.display = 'none';
			document.getElementById('ImagesSliderNext').style.display = 'none';
			document.getElementById('thambBlock').style.width = '100%';
		}
	
		document.querySelectorAll('.product_img_prev_link').forEach(function(elem, i){
			elem.addEventListener('click', function (event){
				event.preventDefault();
				mainImgLink.dataset.fancyboxIndex = i;
				let pathImg = event.currentTarget.getAttribute('href');
				mainImg.setAttribute('src', pathImg);
			});
		});		

		Fancybox.bind('[data-fancybox="gallery"]', {
			Thumbs: {
				type: "classic",
			},
      	}); 
	}

	// for fancybox
	Fancybox.bind("[data-fancybox]", {
	// Your custom options
	});

	
	function addtoCart(){
		let cardBtns = document.querySelectorAll('.card_btn');
		
		if (!cardBtns) return false;
		cardBtns.forEach(function(btn){	

			btn.addEventListener('click', (event)=>{
				event.preventDefault();		

				//console.log(event.currentTarget);		

				

				const exemplAnswer = {
					img: '/images/src/products/vezuviy_hr15.jpg',
					name: 'Название товара',
					qty: 1
				}

				Swal.fire({
					title: "Товара в корзине",
					text: exemplAnswer.name,
					imageUrl: exemplAnswer.img,
					imageWidth: 300,
					imageHeight: 300,
					imageAlt: exemplAnswer.name,
					showCloseButton: true,
					showCancelButton: true,
					confirmButtonColor: "#3085d6",
					cancelButtonColor: "#00b820",
					confirmButtonText: 'Продолжить',  
					cancelButtonText:  '<a href="/personal/cart/" class="to_basket">В корзину</a>' 
				});

			});
		});
	}

	addtoCart();
	






}) /* -- END --*/
