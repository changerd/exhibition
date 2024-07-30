$(document).ready(function() {
    const counters = $('.counter');

    counters.html('0');

    counters.each((ind, counter) => {
        const currentCounter = $(counter);
        const target = +currentCounter.attr('data-target');
        const increment = target / 200;
        
        const updateCounter = () => {            
            const c = +currentCounter.html();
            
            if(c < target) {
                currentCounter.html(Math.ceil(c + increment));
                requestAnimationFrame(updateCounter);
            } else {
                currentCounter.html(target);
            }
        }

        updateCounter();
    })
})