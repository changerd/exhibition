$(document).ready(function() {
    const circlesCount = $('.circle').length;
    let currentActive = 1;

    $('#next').on('click', () => {
        currentActive++;

        if (currentActive > $('.circle').length) {
            currentActive = $('.circle').length;
        }

        update();
    })

    $('#prev').on('click', () => {
        currentActive--;

        if (currentActive < 1) {
            currentActive = 1;
        }

        update();
    })
    
    function update() {
        $('.circle').each((ind, circle) => {
            if(ind < currentActive) {
                $(circle).addClass('active');
            } else {
                $(circle).removeClass('active');
            }            
        });

        const activeCircles = $('.active').length;        

        $('#progress').css('width', (((activeCircles - 1) / (circlesCount - 1)) * 100) + '%');

        if(currentActive === 1) {
            $('#prev').prop('disabled', true);
        } else if(currentActive === circlesCount) {
            $('#next').prop('disabled', true); 
        } else {
            $('#next').prop('disabled', false);
            $('#prev').prop('disabled', false);
        }
    }
})