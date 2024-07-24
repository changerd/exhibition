$(document).ready(function(){
    $('.faq-toggle').each((ind, toggle) => {
        $(toggle).on('click', function() {
            $(toggle).parent().toggleClass('active');
        })
    })
})