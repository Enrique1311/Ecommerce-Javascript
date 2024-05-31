const d = document;

// Mobile Menu ***************************************************

function showMobileMenu() {
	const $menuLeft = d.querySelector(".menu-left");

	d.addEventListener("click", (e) => {
		if (e.target.matches(".hamb-menu-icon i")) {
			$menuLeft.classList.add("active");
		}
		if (e.target.matches(".close-menu-icon i")) {
			$menuLeft.classList.remove("active");
		}
	});
}
showMobileMenu();

// Header searcher **********************************************

function openCloseSearcher() {
	const $headerSeacher = d.querySelector(".header-searcher");

	d.addEventListener("click", (e) => {
		console.log(e);
		if (e.target.matches(".menu-right-search-icon i")) {
			e.preventDefault();
			$headerSeacher.classList.toggle("inactive");
		}

		if (e.target.matches(".input-close-icon")) {
			$headerSeacher.classList.toggle("inactive");
		}
	});
}
openCloseSearcher();
