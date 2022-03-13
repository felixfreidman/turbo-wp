var swiper = new Swiper("#buyoutSwiper", {
    fadeEffect: "cards",
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev ",
    },
    loop: true,
    speed: 800,
    slidesPerView: 3,
    spaceBetween: 50,
    // Responsive breakpoints
    breakpoints: {
        // when window width is >= 320px
        600: {
            slidesPerView: 1,
            spaceBetween: 50,
        },
        // when window width is >= 480px
        850: {
            slidesPerView: 2,
            spaceBetween: 50,
        },
    },
});

const allButtons = document.querySelectorAll(".modalToggle");
const darkLayer = document.getElementById("darkLayer");
const darkLayerForm = document.getElementById("darkLayerForm");
allButtons.forEach((button) => {
    button.addEventListener("click", () => {
        darkLayer.classList.remove("js--hidden");
        darkLayerForm.classList.remove("js--hidden");
    });
});

darkLayer.addEventListener("click", () => {
    darkLayer.classList.add("js--hidden");
    darkLayerForm.classList.add("js--hidden");
});