// SELECTING ELEMENTS

const mobileNavMenuBtn = document.querySelector("#mobile-nav-btn");
const navMenu = document.querySelector(".nav-menu-container");

// FUNCTIONS

function toggleMobileNavMenu() {
    navMenu.classList.toggle("active");
    mobileNavMenuBtn.classList.toggle("active");
}

function removeActiveClass() {
    navMenu.classList.remove("active");
    mobileNavMenuBtn.classList.remove("active");
}

// EVENT LISTENERS

mobileNavMenuBtn.addEventListener("click", toggleMobileNavMenu);

window.addEventListener("resize", function () {
    if (window.innerWidth >= 768) {
        removeActiveClass();
    }
});
