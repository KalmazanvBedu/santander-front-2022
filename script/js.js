var miVideo = document.getElementById("videoUno");
function playPause(){
    if(miVideo.paused){
        miVideo.play();
    }else{
        miVideo.pause();
    }
}

function stop(){
    miVideo.pause();
    miVideo.currentTime = 0;
}

function skip(value){
    miVideo.currentTime += value;
}