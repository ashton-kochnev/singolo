window.addEventListener('DOMContentLoaded', () => {

// Hamburger

    const menu = document.querySelector('.header_navigation'),
          menuItem = document.querySelectorAll('.navigation_link'),
          hamburger = document.querySelector('.hamburger'),
          logo = document.querySelector('.logo');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('header_navigation-active');
        logo.classList.toggle('logo_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('header_navigation-active');
        });
    });



//Slider

const prev = document.querySelector('.btn-prev'),
      next = document.querySelector('.btn-next'),
      slides = document.querySelectorAll('.slide');

let index = 0;

const activeSlide = n => {
    for(slide of slides) {
        slide.classList.remove('active');
    }
    slides[n].classList.add('active');
};

const nextSlide = () => {
    if(index === slides.length - 1) {
        index = 0;
        activeSlide(index);
    } else {
        index++;
        activeSlide(index);
    }
};

const prevSlide = () => {
    if(index === 0) {
        index = slides.length - 1;
        activeSlide(index);
    } else {
        index--;
        activeSlide(index);
    }
};

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);




//Menu scroll

document.addEventListener('scroll', onScroll);

function onScroll() {
    const curPos = window.scrollY;
    const section = document.querySelectorAll('body>section');
    const links = document.querySelectorAll('.navigation_link a');

    section.forEach((el) => {
        if (el.offsetTop <= curPos && (el.offsetTop + el.offsetHeight) > curPos) {
            links.forEach((a) => {
                a.classList.remove('navigation_link-active');
                if (el.getAttribute('id') === a.getAttribute('href').substring(1)) {
                    a.classList.add('navigation_link-active');
                }
            });
        }
    });
}


//Suflle

const btn = document.querySelector('.portfolio_button');
const portfolio = document.querySelector('.portfolio_list');
let arr1 = portfolio.querySelectorAll('div');
let a = 0;
let arr2 = [];
for(let i = arr1.length - 1; i >= 0; i--){
        arr2[i] = a;
}
btn.querySelectorAll('span').forEach(el => {
el.addEventListener('click', (event) =>{
    btn.querySelectorAll('span').forEach(el => el.classList.remove('button_active'));
    event.target.classList.add('button_active');
    portfolio.querySelectorAll('div').forEach(el => el.remove());
    for (var i = arr1.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let temp = arr1[i];
            arr1[i] = arr1[j];
            arr1[j] = temp;
        }
    while (i < arr1.length) {
        let j = Math.floor(Math.random() * (arr1.length));
        if (arr2[j] == a){
            arr2[j] = a + 1;
            portfolio.prepend(arr1[j]);
            ++i;
        }
    }
    ++a;   
});
});
});


