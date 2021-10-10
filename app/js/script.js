const btnHamburger = document.querySelector(".header__toggle");
const header = document.querySelector(".header");
const body = document.querySelector("body");
const header__menu = document.querySelector(".header__menu");
const header__text = document.querySelector(".header__text");

btnHamburger.addEventListener("click", () => {
    if (header.classList.contains("open")) {
        header.classList.remove("open");
        body.classList.remove("no-scroll");
        header__menu.classList.add("hide-for-mobile");
        header__text.classList.remove("hide-for-mobile");
    } else {
        header.classList.add("open");
        body.classList.add("no-scroll");
        header__menu.classList.remove("hide-for-mobile");
        header__text.classList.add("hide-for-mobile");
    }
})