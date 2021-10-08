const btnHamburger = document.querySelector(".header__toggle");
const header = document.querySelector(".header");

btnHamburger.addEventListener("click", () => {
    if (header.classList.contains("open")) {
        header.classList.remove("open");
    } else {
        header.classList.add("open");
    }
})