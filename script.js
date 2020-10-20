
//Menu scroll

document.addEventListener('scroll', onScroll);

function onScroll() {
    const curPos = window.scrollY;
    const section = document.querySelectorAll('body>section');
    const links = document.querySelectorAll('.navigation_link a');

    section.forEach((el) => {
        if (el.offsetTop - 95 <= curPos && (el.offsetTop + el.offsetHeight) > curPos) {
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
            // if (clickedTag.innerText === 'All') {
            //     showAll();
            // } else {    
            //     filterBySelectedTag();
            // }
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

// const filterBySelectedTag = (clickedTag) => {
//     const portfolio = document.querySelectorAll('.portfolio_list li');
//     console.log(portfolio);
// };


addTagsClickHandler();