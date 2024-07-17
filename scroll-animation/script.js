$(document).ready(function() {
    $(window).on('scroll', checkBoxes)

    checkBoxes();

    function checkBoxes() {
        const triggerBottom = window.innerHeight / 5 * 4;

        $('.box').each((ind, box) => {
            const boxTop = $(box)[0].getBoundingClientRect().top;
            
            if(boxTop < triggerBottom) {
                $(box).addClass('show');
            } else {
                $(box).removeClass('show');
            }
        });
    }
})