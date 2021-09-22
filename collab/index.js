const menuButton = document.querySelector(".menu-button");
const closeButton = document.querySelector(".close-button");

function toggleMobileNavigation() {
	const element = document.querySelector(".mobile-navigation");
	element.classList.toggle("mobile-navigation__open");
}

menuButton.addEventListener("click", toggleMobileNavigation);
closeButton.addEventListener("click", toggleMobileNavigation);
