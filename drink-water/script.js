$(document).ready(function() {
    const smallCups = $('.cup-small');
    const liters = $('#liters');
    const percentage = $('#percentage');
    const remained = $('#remained');

    updateBigCup();

    smallCups.each((ind, cup) => {
        $(cup).on('click', () => highlightCups(ind));
    });

    function highlightCups(index) {
        const currentCup = $(smallCups[index]);

        if (index === 7 && currentCup.hasClass('full')) {
            index++;
        } else if (currentCup.hasClass('full') && !currentCup.next().hasClass('full')) {
            index--;
        }

        smallCups.each((ind, cup) => {
            $(cup).toggleClass('full', ind <= index);
        });

        updateBigCup();
    }

    function updateBigCup() {
        const fullCups = smallCups.filter('.full').length;
        const totalCups = smallCups.length;
        const fullRatio = fullCups / totalCups;

        percentage.css('visibility', fullCups === 0 ? 'hidden' : 'visible');
        percentage.css('height', `${fullRatio * 330}px`);
        percentage.text(`${Math.round(fullRatio * 100)}%`);

        if (fullCups === totalCups) {
            percentage.css('height', '330px'); // Полное заполнение
            remained.addClass('hidden');
        } else {
            remained.removeClass('hidden');
        }

        liters.text(`${2 - (250 * fullCups / 1000)}L`);
    }
});