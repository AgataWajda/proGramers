const swiper = new Swiper(".swiper", {
	speed: 400,

	centeredSlides: true,
	autoplay: {
		delay: 3500,
	},
	spaceBetween: 30,
	loop: true,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},

	breakpoints: {
		0: { slidesPerView: 1 },
		768: { slidesPerView: 2 },
		996: { slidesPerView: 3 },
	},
});
