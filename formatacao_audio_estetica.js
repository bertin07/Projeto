var audio = document.getElementById("musica_fundo");
audio.volume = 1;

var btn = document.getElementById("ligar");
btn.addEventListener("click",function(){
    if(audio.paused){
        audio.muted = false;
        audio.play();
        icon.src= "img/volume_up_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.png"
    }
    else{
        audio.pause();
    }
});

var shelly = document.getElementById("shelly_sound")
var btn = document.getElementById("pin");
btn.addEventListener("click",function(){
        shelly.muted = false;
        shelly.play();
});