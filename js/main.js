const d = document;

// Mobile Menu ***************************************************

function showMobileMenu() {
	const $menuLeft = d.querySelector(".menu-left");

	d.addEventListener("click", (e) => {
		console.log(e);
		if (e.target.matches(".hamb-menu-icon i")) {
			$menuLeft.classList.add("active");
		}
		if (e.target.matches(".close-menu-icon i")) {
			$menuLeft.classList.remove("active");
		}
	});
}
showMobileMenu();
