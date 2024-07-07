$(document).ready(function() {
    const config = {
        onHost: true,
        repoName: 'exhibition'
    }

    if(config.onHost) {
        $('a').attr('href', function(i, val) {
            return config.repoName + val;
        })
    }
})