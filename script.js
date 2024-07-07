$(document).ready(function() {
    const config = {
        onHost: false,
        repoName: 'exhibition'
    }

    if(config.onHost) {
        $('a').attr('href', function(i, val) {
            if(val.includes(config.repoName))
                return val;
            else
                return config.repoName + val;
        });
    }
})