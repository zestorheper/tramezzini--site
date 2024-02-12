
const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}


const menu = document.querySelector("#menu");
const body = document.querySelector('body');
const overlay = document.querySelector('.overlay')
const overlay2 = document.querySelector('.overlay-2')
const newsletter = document.querySelector('.newsletter')
const btnNewsletter = document.querySelector('.newsletter-btn-close')


function postToGoogle() {
  var field1 = $("#Email").val();

  $.ajax({
url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLSd0Wzgb0-vZbN7G7F5I8jagt6xXmoTGgIaTY30xw3ax228fNg/formResponse",
data: {
"entry.1358555970": field1,
},
type: "POST",
dataType: "xml",
success: function (d) {
$('#contact').trigger('reset');
},
error: function (x, y, z) {
$('#contact').trigger('reset');
}
});
return false;

}

function postToGoogle1() {
  var field1 = $("#Email1").val();

  $.ajax({
url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLSd0Wzgb0-vZbN7G7F5I8jagt6xXmoTGgIaTY30xw3ax228fNg/formResponse",
data: {
"entry.1358555970": field1,
},
type: "POST",
dataType: "xml",
success: function (d) {
$('#contact1').trigger('reset');
},
error: function (x, y, z) {
$('#contact1').trigger('reset');
}
});
return false;

}





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
  if (e.key === 'Escape' && body.classList.contains('nav-open')) {
    navOC();
  }
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


setTimeout(function(){
  overlay2.classList.toggle('show-overlay');
  newsletter.classList.toggle('newsletter-appear')
},5000)

btnNewsletter.addEventListener('click',function(){
overlay2.classList.toggle('show-overlay');
newsletter.classList.toggle('newsletter-appear')
})