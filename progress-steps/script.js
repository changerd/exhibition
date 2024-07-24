$(document).ready(function() {
    const circles = $('.circle');
    const nextBtn = $('#next');
    const prevBtn = $('#prev');
    const progress = $('#progress');

    const circlesCount = circles.length;
    let currentActive = 1;

    nextBtn.on('click', () => {
        currentActive = Math.min(currentActive + 1, circlesCount);
        update();
    });

    prevBtn.on('click', () => {
        currentActive = Math.max(currentActive - 1, 1);
        update();
    });
    
    function update() {
       circles.removeClass('active').slice(0, currentActive).addClass('active');

        const activeCircles = $('.active').length;
        const progressWidth = ((activeCircles - 1) / (circlesCount - 1)) * 100 + '%';
        progress.css('width', progressWidth);

        prevBtn.prop('disabled', currentActive === 1);
        nextBtn.prop('disabled', currentActive === circlesCount);
    }
});