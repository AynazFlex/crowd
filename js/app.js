const stagesSlider = new Swiper('.stages-slider', {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: false,

  navigation: {
    nextEl: '.stages-next',
    prevEl: '.stages-prev',
  },

  pagination: {
    el: '.stages-pagination',
    clickable: true,
    type: 'bullets',
  },

  breakpoints: {
    768: {
      slidesPerView: 2,
    },

    1300: {
      slidesPerView: 3,
    },
  },
})

const playersSlider = new Swiper('.players-slider', {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  speed: 800,

  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },

  navigation: {
    nextEl: '.players-next',
    prevEl: '.players-prev',
  },

  pagination: {
    el: '.players-pagination',
    type: 'fraction',
  },

  breakpoints: {
    768: {
      slidesPerView: 2,
    },

    1200: {
      slidesPerView: 3,
    },
  },
})

const observer = new IntersectionObserver(entries => {

  entries.forEach(entry => {

    if (entry.isIntersecting) {
      entry.target.classList.add('show')
    }

  })

})

const animated = document.querySelectorAll('.section-title, .player-card, .stage-card')

animated.forEach(item => observer.observe(item))
