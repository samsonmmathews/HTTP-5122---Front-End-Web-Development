window.onload = function() {

    /**
     * AUDIO
     */
    var audioPlayer = document.getElementById('audioPlayer');

    document.getElementById('playButton').onclick = function() {
        audioPlayer.play();
    }

    document.getElementById('pauseButton').onclick = function() {
        audioPlayer.pause();
    }

    //More audio methods and properties in the documentation here:
    //https://www.w3schools.com/tags/ref_av_dom.asp


    /**
     * VIDEO
     */
    var videoPlayer = document.getElementById('videoPlayer');

    document.getElementById('videoPlayButton').onclick = function() {
        videoPlayer.play();
    }

    document.getElementById('videoPauseButton').onclick = function() {
        videoPlayer.pause();
    }

    document.getElementById('videoStopButton').onclick = function() {
        videoPlayer.pause();
        videoPlayer.currentTime = 0;
    }

    document.getElementById('videoToggleButton').onclick = function() {
        if(videoPlayer.paused || videoPlayer.ended){
            videoPlayer.play();
            document.getElementById('videoToggleButton').innerHTML = '||';
        } else {
            videoPlayer.pause();
            document.getElementById('videoToggleButton').innerHTML = '&#9658;';
        }
    }

    document.getElementById('videoSkipButton').onclick = function() {
        videoPlayer.currentTime = videoPlayer.currentTime + 10;
    }

    // videoPlayer.ontimeupdate = function() {
    //     if(videoPlayer.currentTime > 5 && videoPlayer.currentTime < 6)
    //     {
    //         alert('5 seconds have passed');
    //     }
    // }


    // SVG animations
    var circ = document.getElementById("c1");
    var movingRight = true;
    var circInterval = setInterval(function() {
        var x = parseInt(circ.getAttribute('cx'));
        console.log(x);
        if(movingRight) {
            circ.setAttribute('cx', String(x += 2));
        } else {
            circ.setAttribute('cx', String(x -= 2));
        }
        if(x > 130 && movingRight)
        {
            movingRight = false;
        }
        else if(x < 25 && !movingRight )
        {
            movingRight = true;
        }
    }, 100);

    document.getElementById('triangle').onmouseover = function() {
        document.getElementById('triangle').style.fill = 'orange';
    }
    document.getElementById('triangle').onmouseout = function() {
        document.getElementById('triangle').style.fill = 'lime';
    }


}