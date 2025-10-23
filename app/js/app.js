// // Import vendor jQuery plugin example
// import '~/app/libs/mmenu/dist/mmenu.js'

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
		e.preventDefault
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
	//mobail menu up and down
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








})
