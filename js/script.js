
// Initialize Swiper
    var swiper = new Swiper(".mySwiper", {
        navigation: {
        nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
      },
    });
    var swiper = new Swiper(".mySwiper2", {
        slidesPerView: 3,
    spaceBetween: 20,
    direction: "horizontal",
    loop: true,
    autoplay: {
        delay: 2500,
    disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
    clickable: true,
    },
    breakpoints: {
        0: {
        slidesPerView: 1,
    spaceBetween: 10,
        },
    640: {
        slidesPerView: 2,
    spaceBetween: 20,
        },
    1024: {
        slidesPerView: 4,
    spaceBetween: 20,
        },
    },
    navigation: {
        nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    },
});
    var swiper = new Swiper(".mySwiper3", {
        slidesPerView: 3,
    spaceBetween: 20,
    direction: "horizontal",
    loop: true,
    autoplay: {
        delay: 2500,
    disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
    clickable: true,
    },
    breakpoints: {
        0: {
        slidesPerView: 1,
    spaceBetween: 10,
        },
    640: {
        slidesPerView: 2,
    spaceBetween: 20,
        },
    1024: {
        slidesPerView: 3,
    spaceBetween: 20,
        },
    },
    navigation: {
        nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    },
});


var swiper = new Swiper(".mySwiper4", {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: false,
  speed: 700,

  effect: "slide",

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: (i, c) => `<span class="${c}">${i + 1}</span>`,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  observer: true,
  observeParents: true,
});

