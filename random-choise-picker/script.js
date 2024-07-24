$(document).ready(function() {
    const textarea = $('#textarea');
    const tagsContainer = $('.tags');

    textarea.focus();

    textarea.on('keyup', function(e) {
        const value = e.target.value;
        createTags(value);

        if (e.key === 'Enter') {
            setTimeout(() => {
                e.target.value = '';
            }, 10);

            randomSelect();
        }
    });

    function createTags(input) {
        const tags = input.split(',')
                          .map(tag => tag.trim())
                          .filter(tag => tag !== '');
        
        tagsContainer.empty();

        tags.forEach(tag => {
            const tagEl = $('<span>').addClass('tag').text(tag);
            tagsContainer.append(tagEl);
        });
    }

    function randomSelect() {
        const times = 30;
        const interval = 100;

        const intervalId = setInterval(() => {
            const randomTag = pickRandomTag();
            highlightTag(randomTag);

            setTimeout(() => {
                unHighlightTag(randomTag);
            }, interval);
        }, interval);

        setTimeout(() => {
            clearInterval(intervalId);

            setTimeout(() => {
                const randomTag = pickRandomTag();
                highlightTag(randomTag);
            }, interval);
        }, times * interval);
    }

    function pickRandomTag() {
        const tags = $('.tag');
        return tags[Math.floor(Math.random() * tags.length)];
    }

    function highlightTag(tag) {
        $(tag).addClass('highlight');
    }

    function unHighlightTag(tag) {
        $(tag).removeClass('highlight');
    }
});