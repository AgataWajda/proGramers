document.addEventListener("DOMContentLoaded", () => {
	const sections = document.querySelectorAll("section");
	const navLinks = document.querySelectorAll(".nav-link");
	const nav = document.querySelector(".navbar");
	const allNavItems = document.querySelectorAll(".nav-link");
	const navList = document.querySelector(".navbar-collapse");

	const activateLink = () => {
		let index = sections.length;

		while (--index && window.scrollY + 500 < sections[index].offsetTop) {}

		navLinks.forEach((link) => link.classList.remove("active"));
		navLinks[index].classList.add("active");
	};

	const addShadow = () => {
		if (window.scrollY >= 100) {
			nav.classList.add("shadow-bg");
		} else {
			nav.classList.remove("shadow-bg");
		}
	};

	allNavItems.forEach((item) =>
		item.addEventListener("click", () => {
			navList.classList.remove("show");
		})
	);
	window.addEventListener("scroll", activateLink);
	window.addEventListener("scroll", addShadow);
});
