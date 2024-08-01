$(document).ready(function () {
    const body = $('body');
    const slides = $('.slide');
    const leftBtn = $('#left');
    const rightBtn = $('#right');

    let activeSlide = 0;

    rightBtn.on('click', function () {
        activeSlide = (activeSlide + 1) % slides.length;
        updateSlides();
    });

    leftBtn.on('click', function () {
        activeSlide = (activeSlide - 1 + slides.length) % slides.length;
        updateSlides();
    });

    function updateSlides() {
        body.css('background-image', slides.eq(activeSlide).css('background-image'));
        slides.removeClass('active').eq(activeSlide).addClass('active');
    }

    updateSlides();
});