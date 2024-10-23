// SELECTING ELEMENTS

const mobileNavMenuBtn = document.querySelector("#mobile-nav-btn");
const navMenu = document.querySelector(".nav-menu-container");
const testimonialCards = document.querySelectorAll(".testimonial-card");
const carouselBtns = document.querySelectorAll(".carousel-btn");

// FUNCTIONS

function initializeCarousel() {
    testimonialCards[1].classList.add("selected");
    carouselBtns[1].classList.add("selected");
}

function toggleMobileNavMenu() {
    navMenu.classList.toggle("active");
    mobileNavMenuBtn.classList.toggle("active");
}

function removeActiveClass() {
    navMenu.classList.remove("active");
    mobileNavMenuBtn.classList.remove("active");
}

// EVENT LISTENERS

// MOBILE NAVIGATION TOGGLE FUNCTIONALITY

mobileNavMenuBtn.addEventListener("click", toggleMobileNavMenu);

// CHANGE THE STYLES OF MOBILE NAVIGATION AT 768PX

window.addEventListener("resize", function () {
    if (window.innerWidth >= 768) {
        removeActiveClass();
    }
});

// CAROUSEL FUNCTIONALITY

carouselBtns.forEach(function (button, i) {
    button.addEventListener("click", function () {
        testimonialCards.forEach((item) => item.classList.remove("selected"));
        carouselBtns.forEach((btn) => btn.classList.remove("selected"));

        testimonialCards[i].classList.add("selected");
        button.classList.add("selected");
    });
});

// SELECT 1 TESTIMONIAL AND 1 BTN AT PAGE LOAD

initializeCarousel();
