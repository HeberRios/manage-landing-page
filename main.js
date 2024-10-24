"use strict";

// SELECTING ELEMENTS

const mobileNavMenuBtn = document.querySelector("#mobile-nav-btn");
const navMenu = document.querySelector(".nav-menu-container");
const testimonialCards = document.querySelectorAll(".testimonial-card");
const carouselBtns = document.querySelectorAll(".carousel-btn");
const emailInput = document.querySelector("#email");
const errorMessage = document.querySelector(".error-msg");
const emailForm = document.querySelector("#email-updates-form");
const submitBtn = document.querySelector("#submit-email");
const copyrightYear = document.querySelector("#year");
const currentYear = new Date().getFullYear();

// EMAIL REGEX
const emailRegEx =
    /^([-!#-'*+/-9=?A-Z^-~]+(\.[-!#-'*+/-9=?A-Z^-~]+)*|"([]!#-[^-~ \t]|(\\[\t -~]))+")@([-!#-'*+/-9=?A-Z^-~]+(\.[-!#-'*+/-9=?A-Z^-~]+)+|\[[\t -Z^-~]*])$/;

// FUNCTIONS

function setCurrentYear() {
    copyrightYear.textContent = currentYear;
}

function toggleMobileNavMenu() {
    navMenu.classList.toggle("active");
    mobileNavMenuBtn.classList.toggle("active");
}

function removeActiveClass() {
    navMenu.classList.remove("active");
    mobileNavMenuBtn.classList.remove("active");
}

function initializeCarousel() {
    testimonialCards[1].classList.add("selected");
    carouselBtns[1].classList.add("selected");
}

function emailValidation() {
    if (emailInput.value === "") {
        errorMessage.textContent = "Please enter an email";
        errorMessage.classList.add("error-active");
        emailInput.classList.add("error-active");
        return false;
    } else if (emailRegEx.test(emailInput.value)) {
        errorMessage.textContent = "Valid email";
        errorMessage.classList.remove("error-active");
        emailInput.classList.remove("error-active");
        return true;
    } else {
        errorMessage.textContent = "Please enter a valid email";
        errorMessage.classList.add("error-active");
        emailInput.classList.add("error-active");
        return false;
    }
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

// EVENT LISTENER FOR THE EMAIL INPUT

emailInput.addEventListener("input", emailValidation);

// PRESSING THE SUBMIT BTN
submitBtn.addEventListener("click", function () {
    if (emailValidation()) {
        emailInput.value = "";
        errorMessage.textContent = "Email registered, thanks!!!";
    } else {
    }
});

// PREVENT THE DEFAULT BEHAVIOR OF THE FORM

emailForm.addEventListener("submit", function (event) {
    event.preventDefault();
});

// SET THE COPYRIGHT YEAR TO CURRENT YEAR

setCurrentYear();
