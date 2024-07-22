$(document).ready(function() {
    $('.form-control label').each((ind, label) => {
        $(label).html($(label).html().split('').map((letter, i) => `<span style="transition-delay: ${i * 50}ms">${letter}</span>`).join(''));
    });
})