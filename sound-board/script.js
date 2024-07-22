$(document).ready(function() {
    const sounds = ['vi_ka', 'gadza', 'hip_hop', 'relax', 'cvv', 'stop'];

    sounds.forEach(sound => {
        const btn = document.createElement('button');
        $(btn).addClass('btn');
        $(btn).html(sound);
        
        $(btn).on('click', function() {
            stopSongs();
            if($(`#${sound}`).length)           
                $(`#${sound}`)[0].play();
        })

        $('.buttons').append($(btn));
        
    })

    function stopSongs() {
        sounds.forEach(sound =>  {
            if($(`#${sound}`).length) {
                $(`#${sound}`)[0].pause();
                $(`#${sound}`)[0].currentTime = 0;
            }
        });
    }
})