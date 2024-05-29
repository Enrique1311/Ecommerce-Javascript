const d = document;

// Mobile Menu ***************************************************

function showMobileMenu() {
	const $navbar = d.querySelector(".navbar");

	d.addEventListener("click", (e) => {
		console.log(e);
		if (e.target.matches(".menu-icon a i")) {
			$navbar.classList.add("active");
		}
		if (e.target.matches(".close-menu-icon a i")) {
			$navbar.classList.remove("active");
		}
	});
}
showMobileMenu();
