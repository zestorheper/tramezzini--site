const hero = document.querySelector('.hero-container');


const heroSlider = document.querySelector(".hero-slider");
const heroSliderItems = document.querySelectorAll(".slider-item");
const heroSliderPrevBtn = document.querySelector(".arr-left");
const heroSliderNextBtn = document.querySelector("[data-next-btn]");

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

  console.log('el')
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


const overlay2 = document.querySelector('.overlay-2')
const newsletter = document.querySelector('.newsletter')
const btnNewsletter = document.querySelector('.newsletter-btn-close');

// setTimeout(function(){
//     overlay2.classList.toggle('show-overlay');
//     newsletter.classList.toggle('newsletter-appear')
//   },10000)
  
//   btnNewsletter.addEventListener('click',function(){
//   overlay2.classList.toggle('show-overlay');
//   newsletter.classList.toggle('newsletter-appear')
//   })