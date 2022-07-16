import Swiper from 'swiper/bundle';

const swiper = new Swiper('.image-slider', {
  // loop: true,
  grabCursor: true,
  slideToClickedSlide: true,
  autoHeight: true,
  speed: 500,
  effect: 'fade',

  breakpoints: {
    320: {
      slidePerView: 1,
    },
    480: {
      slidePerView: 2,
    },
    990: {
      slidePerView: 3,
    },
  },

  autoplay: {
    delay: 1000,
    stopOnLastSlide: false,
    disableOnIteration: false,
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    
    type: 'fraction',
    renderFraction: (currentClass, totalClass) => `photo <span class="${currentClass}"></span> of <span class="${totalClass}"></span>`,
    
    // clickable: true,
    // dynamicBullets: true,
    // renderBullet: (index, className) => `<span class="${className}">${index + 1}</span>`,
    
    // type: 'progressbar'
  },
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
  }
});