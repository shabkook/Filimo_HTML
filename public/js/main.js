// import menu from "./menu/menu";
// import { Autoplay } from "swiper/modules";
import buttom_menu from "../js/menu/buttom_menu.js";
import slider from "../js/slider/slider.js";
// import Swiper from "swiper";
// menu ()

function initslider() {
  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}

async function allData() {
  await buttom_menu();
  await slider();
  initslider();
}

allData();
