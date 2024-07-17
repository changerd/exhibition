$(document).ready(function() {
    $('.left').on('mouseenter', () => $('.container').addClass('hover-left'))
    $('.left').on('mouseleave', () => $('.container').removeClass('hover-left'))

    $('.right').on('mouseenter', () => $('.container').addClass('hover-right'))
    $('.right').on('mouseleave', () => $('.container').removeClass('hover-right'))    
});