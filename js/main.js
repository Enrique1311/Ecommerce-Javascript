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

// Home Slider *******************************************************

function moveSlider() {
	const $homeSlider = d.querySelector(".home-slider");
	let $allSliderItems = d.querySelectorAll(".home-slider-item"),
		$lastSliderItem = $allSliderItems[$allSliderItems.length - 1];

	$homeSlider.insertAdjacentElement("afterbegin", $lastSliderItem);

	const nextSliderItem = () => {
		let $firstSliderItem = d.querySelectorAll(".home-slider-item")[0];
		$homeSlider.style.marginLeft = "-200%";
		$homeSlider.style.transition = "all .5s linear";

		setTimeout(() => {
			$homeSlider.style.transition = "none";
			$homeSlider.insertAdjacentElement("beforeend", $firstSliderItem);
			$homeSlider.style.marginLeft = "-100%";
		}, 500);
	};

	const prevSliderItem = () => {
		$allSliderItems = d.querySelectorAll(".home-slider-item");
		$lastSliderItem = $allSliderItems[$allSliderItems.length - 1];

		$homeSlider.style.marginLeft = "0";
		$homeSlider.style.transition = "all 0.5s linear";

		setTimeout(() => {
			$homeSlider.style.transition = "none";
			$homeSlider.insertAdjacentElement("afterbegin", $lastSliderItem);
			$homeSlider.style.marginLeft = "-100%";
		}, 500);
	};

	d.addEventListener("click", (e) => {
		if (e.target.matches(".home-slider-control-right i")) {
			nextSliderItem();
		}

		if (e.target.matches(".home-slider-control-left i")) {
			prevSliderItem();
		}
	});

	// setInterval(() => {
	// 	nextSliderItem();
	// }, 3000);
}
moveSlider();
