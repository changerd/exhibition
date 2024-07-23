$(document).ready(function(){
    getJoke();

    $('#jokeBtn').on('click', function(){
        getJoke();
    });

    function getJoke() {
        return $.ajax({
            url: 'https://icanhazdadjoke.com/',
            method: 'GET',
            contentType: 'application/json',
            dataType: 'json',
            success: function(response) {
                if(response.joke) {
                    $('#joke').html(response.joke);
                }
            }
        })
    }    
})