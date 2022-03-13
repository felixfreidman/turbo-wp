"use strict";

//   $('#btn-menu-mob').click(function(e) {
//       e.preventDefault();
//       $('.header__svg-mob').addClass('is-active');
//       $('#menu-mobile').animate({ 
//         right: '0px' 
//         }, 300);
//       $('#menu-mobile').animate({ 
//         right: '0px' 
//         }, 300);
//     $('body').css('overflow', 'hidden');
//     $('.page').animate({ 
//         right: '190px' 
//     }, 200); 
// });
// $('.menu-mobile__svg-close').click(function(e) {
//     e.preventDefault();
//     $('.header__svg-mob').removeClass('is-active');
//     $('#menu-mobile').animate({ 
//       right: '-207px' 
//   }, 300);
//   $('body').css('overflow', 'auto');
//   $('.page').animate({ 
//       right: '0px' 
//   }, 200); 
// });
var swiper = new Swiper("#buyoutSwiper", {
  fadeEffect: "cards",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev "
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
      spaceBetween: 50
    },
    // when window width is >= 480px
    850: {
      slidesPerView: 2,
      spaceBetween: 50
    }
  }
});
var allButtons = document.querySelectorAll(".modalToggle");
var darkLayer = document.getElementById("darkLayer");
var darkLayerForm = document.getElementById("darkLayerForm");
allButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    darkLayer.classList.remove("js--hidden");
    darkLayerForm.classList.remove("js--hidden");
  });
});
darkLayer.addEventListener("click", function () {
  darkLayer.classList.add("js--hidden");
  darkLayerForm.classList.add("js--hidden");
});