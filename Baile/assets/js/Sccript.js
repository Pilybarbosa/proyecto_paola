let esqueleto = "off";
let esqueletoStop = document.getElementById("esqueletoOff");
let botonSonido = new Audio ('../assets/sound/botonbailar.mp3');
let Sonido = new Audio ('../assets/sound/Guaracha.mp3');

function Bailar(){
    if(esqueleto == "off") {
        esqueleto = "on"
        esqueletoStop.classList.add("on")
        esqueletoStop.addEventListener('click', ()=>{
            botonSonido.play();
            Sonido.play();
        })
    }
    else{
        esqueleto = "off"
        esqueletoStop.addEventListener('click', ()=>{
            Sonido.pause();
        })
        esqueletoStop.classList.remove("on")
        esqueleto = "off"
    }
}