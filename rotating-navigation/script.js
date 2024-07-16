$(document).ready(function() {
    $('#open').on('click', function(){
        $('.container').addClass('show-nav');
    });

    $('#close').on('click', function(){
        $('.container').removeClass('show-nav');
    });
});