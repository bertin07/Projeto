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

var shelly = document.getElementById("shelly_sound");
var p1 = document.getElementById("pin");
p1.addEventListener("click",function(){
        shelly.muted = false;
        shelly.play();
});

var img_1 = document.getElementById("p1_img");
img_1.addEventListener("click",function(){
    shelly.muted = false;
    shelly.play();
});



var el_primo = document.getElementById("primo_sound");
var p2 = document.getElementById("pin_elprimo");
p2.addEventListener("click",function(){
        el_primo.muted = false;
        el_primo.play();
});

var p2 = document.getElementById("p2_img");
p2.addEventListener("click",function(){
        el_primo.muted = false;
        el_primo.play();
});

var poco = document.getElementById("poco_sound");
var p3 = document.getElementById("poco_pin");
p3.addEventListener("click",function(){
        poco.muted = false;
        poco.play();
});

var p3 = document.getElementById("p3_img");
p3.addEventListener("click",function(){
        poco.muted = false;
        poco.play();
});