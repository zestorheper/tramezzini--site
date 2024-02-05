





const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}


const menu = document.querySelector("#menu");
const body = document.querySelector('body');
const overlay = document.querySelector('.overlay')






const navOC= function () {
  overlay.classList.toggle('show-overlay')
  body.classList.toggle('nav-open');
};

// const nav = document.querySelector('.nav');

// window.addEventListener("scroll", function () {
//   nav.classList.toggle("hidden", window.scrollY > 70);
// });

// header-follow

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

const hiddenEl = document.querySelectorAll(".hide");

hiddenEl.forEach((el) => observer.observe(el));
const header = document.querySelector(".header");
window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 500);
});


//////////////////////////
menu.addEventListener('click' ,navOC)


overlay.addEventListener("click", function () {
  overlay.classList.toggle('show-overlay')
  body.classList.toggle('nav-open');
});

document.addEventListener('keydown', function (e) {
  console.log(e.key);

  if (e.key === 'Escape' && body.classList.contains('nav-open')) {
    navOC();
  }
});

const inpt = document.querySelector(".inpt");
const inptBtn = document.querySelector(".btn-inpt");
const good = document.querySelector(".good");
const bad = document.querySelector(".bad");

inptBtn.addEventListener("click", function () {
  // if (inpt.value.lenght >= 1) {
  //   good.classList.remove("hidden");
  // }

  if (inpt.value.length >= 1) {
    good.classList.remove("hidden");
  }

  if (inpt.value === "") {
    bad.classList.remove("hidden");
  }

  if (!inpt.classList.contains("hidden") & (inpt.value === "")) {
    good.classList.add("hidden");
    bad.classList.remove("hidden");
  }

  if (!bad.classList.contains("hidden") & (inpt.value.length >= 1)) {
    good.classList.remove("hidden");
    bad.classList.add("hidden");
  }

  inpt.value = "";
});



const hero = document.querySelector('.hero-container');


const heroSlider = document.querySelector(".hero-slider");
const heroSliderItems = document.querySelectorAll(".slider-item");
const heroSliderPrevBtn = document.querySelector(".arr-left");
const heroSliderNextBtn = document.querySelector(".arr-right");

let currentSlidePos = 0;
let lastActiveSliderItem = heroSliderItems[0];

const updateSliderPos = function () {
  lastActiveSliderItem.classList.remove("active");
  heroSliderItems[currentSlidePos].classList.add("active");
  lastActiveSliderItem = heroSliderItems[currentSlidePos];
}

const slideNext = function () {
  if (currentSlidePos >= heroSliderItems.length - 1) {
    currentSlidePos = 0;
  } else {
    currentSlidePos++;
  }

  updateSliderPos();
}

heroSliderNextBtn.addEventListener("click", slideNext);

const slidePrev = function () {
  if (currentSlidePos <= 0) {
    currentSlidePos = heroSliderItems.length - 1;
  } else {
    currentSlidePos--;
  }

  updateSliderPos();
}

heroSliderPrevBtn.addEventListener("click", slidePrev);

/**
 * auto slide
 */

let autoSlideInterval;

const autoSlide = function () {
  autoSlideInterval = setInterval(function () {
    slideNext();
  }, 7000);
}



 addEventOnElements([heroSliderNextBtn, heroSliderPrevBtn], "mouseover", function () {
  clearInterval(autoSlideInterval);
 });

addEventOnElements([heroSliderNextBtn, heroSliderPrevBtn], "mouseout", autoSlide);

window.addEventListener("load", autoSlide);


const listItemText = document.querySelectorAll('.list-item-text');

for(let i = 0; i <listItemText.length; i++ ){
  listItemText[i].addEventListener('mouseover', function (){
    listItemText[i].classList.add('active-item')
  });

 
}

for(let i = 0; i <listItemText.length; i++ ){
  listItemText[i].addEventListener('mouseout', function (){
    listItemText[i].classList.remove('active-item')
  });

   
}


const third = document.querySelector('.third')
const rSign = document.querySelector('.r-sign')

third.addEventListener('mouseover', function(){
rSign.classList.add('hidden')
})




// svg animation


function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 10;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } 
  }
}

window.addEventListener("scroll", reveal);
