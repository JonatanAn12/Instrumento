const audio = document.getElementById('miAudio');
const audio2 = document.getElementById('audio2')
document.addEventListener('keydown', function(event) {
    if (event.key === 'k' || event.key === 'K') {
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }
    }
});

document.addEventListener('keydown', function(event){
    if(event.key === 'e' || event.key === 'E') {
        if(audio2.paused) {
            audio2.play();
        } else {
            audio2.pause();
        }
    }
});