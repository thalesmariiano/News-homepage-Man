
const mobileMenu = document.querySelector("#mobile-menu")
const openMenu   = document.querySelector("#open-menu")
const closeMenu  = document.querySelector("#close-menu")

openMenu.addEventListener("click", () => {
	mobileMenu.classList.remove("hidden")
})

closeMenu.addEventListener("click", () => {
	mobileMenu.classList.add("hidden")
})

// On Resize, close menu
window.onresize = () => mobileMenu.classList.add("hidden")