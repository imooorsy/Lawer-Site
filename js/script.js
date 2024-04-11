const swiper = new Swiper(".services-swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
const whySwiper = new Swiper(".why-swiper", {
  effect: "cards",
  grabCursor: true,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
});
const teamSwiper = new Swiper(".team-swiper", {
  effect: "cards",
  grabCursor: true,
  loop: true,
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
});

const sponsersSwiper = new Swiper(".sponsersSwiper", {
  slidesPerView: 3,
  spaceBetween: 20,
  freeMode: true,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var slider = document.querySelector(".slider");
var sliderImg = document.querySelector(".slider img");
var right = document.querySelector(".right");
var left = document.querySelector(".left");
var count = 1;
right.addEventListener("click", function () {
  if (count < 3) {
    sliderImg.setAttribute("src", "assets/images/" + ++count + ".png");
  } else {
    count = 1;
    sliderImg.setAttribute("src", "assets/images/" + count + ".png");
  }
});
left.addEventListener("click", function () {
  if (count > 1) {
    sliderImg.setAttribute("src", "assets/images/" + --count + ".png");
  } else {
    count = 3;
    sliderImg.setAttribute("src", "assets/images/" + count + ".png");
  }
});

var clientSwiper = new Swiper(".clientSwiper", {
  effect: "cards",
  grabCursor: true,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
});

const counters = document.querySelectorAll(".static h3 span");
const container = document.querySelector(".contact");

let activated = false;

window.addEventListener("scroll", () => {
  if (
    window.scrollY > container.offsetTop - container.offsetHeight - 200 &&
    activated === false
  ) {
    counters.forEach((counter) => {
      counter.innerText = 0;
      let count = 0;
      function updateCount() {
        const target = parseInt(counter.dataset.count);
        if (count < target) {
          count++;
          counter.innerText = count;
          let counterTime = 20;

          if (count > 100) {
            counterTime = 1;
          }
          setTimeout(updateCount, counterTime);
        } else {
          counter.innerText = target;
        }
      }
      updateCount();
      activated = true;
    });
  } else if (
    window.scrollY < container.offsetTop - container.offsetHeight - 500 ||
    (window.scrollY === 0 && activated === true)
  ) {
    counters.forEach((counter) => {
      counter.innerText = 0;
    });
    activated = false;
  }
});
