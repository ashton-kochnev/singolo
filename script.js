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

//Tabs

const addTagsClickHandler = () => {
    document.querySelector('.portfolio_button').addEventListener('click', (e) => {
        if (e.target.classList.contains('button')) {
            const clickedTag = e.target;
            removeSelectedTags();
            selectClickedTag(clickedTag);
        } 
    });
};

const removeSelectedTags = () => {
    let tags = document.querySelectorAll('.portfolio_button .button');
    tags.forEach(button => {
        button.classList.remove('button_active');
    });
};

const selectClickedTag = (clickedTag) => {
    clickedTag.classList.add('button_active');
};

addTagsClickHandler();


});


