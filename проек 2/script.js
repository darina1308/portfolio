let filterBtns = document.querySelectorAll('.filter-btn');
let workCards = document.querySelectorAll('.work-card');

for (let btn of filterBtns) {
    btn.onclick = function () {
        for (let b of filterBtns) {
            b.classList.remove('filter-btn--active');
        }
        btn.classList.add('filter-btn--active');

        let filter = btn.dataset.filter;

        for (let card of workCards) {
            if (filter === 'all' || card.dataset.category === filter) {
                card.classList.remove('hidden');
            } else {
                card.classList.add('hidden');
            }
        }
    };
}

let sections = document.querySelectorAll('section[id]');
let navLinks = document.querySelectorAll('.header__link');

window.onscroll = function () {
    let current = '';

    for (let section of sections) {
        if (scrollY >= section.offsetTop - 100) {
            current = section.id;
        }
    }

    for (let link of navLinks) {
        link.classList.remove('header__link--active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('header__link--active');
        }
    }
};