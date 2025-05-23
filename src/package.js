

window.addEventListener('DOMContentLoaded', function () {
    // swiper
    // let totalSlide = 5;
    let packageSwiper = new Swiper('#package-swiper', {
        slidesPerView: 3,
        speed: 1000,
        slideToClickedSlide: true,
        preventClicks: false,
        preventClicksPropagation: false,
        direction: 'horizontal',
        centeredSlides: true,
        pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        loop: true,
        breakpoints: {
            1779: {
                slidesPerView: 2.75,
                direction: 'horizontal',
            },
            1199.98: {
                slidesPerView: 1.75,
                direction: 'horizontal',
            },
            991.98: {
                slidesPerView: 1.5,
                direction: 'horizontal',
            },
            767.98: {
                slidesPerView: 1.25,
                direction: 'horizontal',
            },
            0: {
                slidesPerView: 1.1,
                spaceBetween: 20,
                centeredSlides: false,
                direction: 'horizontal',
            }
        },
    });
});


// function open close collapse
// const openCollapse = document.getElementById('opencollapseIndex4');
// openCollapse.addEventListener('click', function () {
//     const element = document.querySelector('.pack-slick-container');
//     if (element.classList.contains('expanded')) {
//         element.classList.remove('expanded');
//     } else {
//         element.classList.add('expanded');
//     }

// });


// const closeBtn = document.getElementById('open-modalIndex4');
// const collapseElement = document.getElementById('packageConditionIndex4');
// closeBtn.addEventListener('click', function () {
//     console.log(
//         'click'
//     );
//     const element = document.querySelector('.pack-slick-container');
//     const collapseInstance = bootstrap.Collapse.getOrCreateInstance(collapseElement);
//     collapseInstance.hide();
//     element.classList.remove('expanded');
// })