"use strict"
// BURGER
const burger = document.querySelector('.burger');
const burgerMenu = document.querySelector('.header__menu');

burger.addEventListener('click', function() {
    burger.classList.toggle('_active');
    burgerMenu.classList.toggle('_active');
});


// RANGE
var elem = document.querySelector('input[type="range"]');
    
var rangeValue = function(){
  var newValue = elem.value;
  var target = document.querySelector('.value');
  target.innerHTML = newValue + '%';
}

elem.addEventListener("input", rangeValue);


// ANIMATION

const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0 ) {
    let animationFrameId = null;
    window.addEventListener('scroll', () => {
        cancelAnimationFrame(animationFrameId);
        animationFrameId = requestAnimationFrame(animOnScroll);
    });

    function animOnScroll() {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if ((scrollY > animItemOffset - animItemPoint) && scrollY < (animItemOffset + animItemHeight)) {
                animItem.classList.add('_active');
               
            } else {
                if (!animItem.classList.contains('_anim-no-hide')) {
                    animItem.classList.remove('_active');
                    
                }
            }
        }
    }

    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.scrollX || document.documentElement.scrollLeft,
            scrollTop = window.scrollY || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }

    // Используйте requestAnimationFrame при первой загрузке страницы
    requestAnimationFrame(animOnScroll);
}

// HEADER STICKY
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  var header = document.getElementById("header");
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    header.classList.add("sticky"); // Добавить класс при прокрутке
  } else {
    header.classList.remove("sticky"); // Убрать класс, если прокрутка в начале страницы
  }
}

// Custom SELECT

var customSelect = document.querySelector(".custom-select");
var selectSelected = customSelect.querySelector(".select-selected");
var selectItems = customSelect.querySelector(".select-items");
var selectOptions = selectItems.querySelectorAll(".select-option");

selectSelected.addEventListener("click", function() {
  selectItems.classList.toggle("select-hide");
  selectSelected.classList.toggle("select-arrow-active");
});

for (var i = 0; i < selectOptions.length; i++) {
  selectOptions[i].addEventListener("click", function() {
    selectSelected.textContent = this.textContent;
    selectItems.classList.add("select-hide");
    selectSelected.classList.remove("select-arrow-active");
  });
}

document.addEventListener("click", function(e) {
  if (!customSelect.contains(e.target)) {
    selectItems.classList.add("select-hide");
    selectSelected.classList.remove("select-arrow-active");
  }
});