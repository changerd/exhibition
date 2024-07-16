$(document).ready(function() {
    $('.btn').on('click', function() {
        $('.search').toggleClass('active');
        $('.input').focus();
    })
})