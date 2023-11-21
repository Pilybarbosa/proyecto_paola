function obtenerTiempoFaltante(fechaLimite){
    let ahora = new Date(); 
    let tiempoFaltante = (new Date(fechaLimite) - ahora +1000)/1000;
    let segundFaltante = ('0' + Math.floor(tiempoFaltante % 60)).slice(-2);
    let minutosFaltante = ('0' + Math.floor(tiempoFaltante / 60 % 60)).slice(-2);
    let horasFaltante = ('0' + Math.floor(tiempoFaltante / 3600 % 24)).slice(-2);
    let diasFaltante = ('0' + Math.floor(tiempoFaltante / (3600 * 24))).slice(-2);

    return{
        segundFaltante,
        minutosFaltante,
        horasFaltante,
        diasFaltante,
        tiempoFaltante
    }
}
let papaNoel = document.getElementById("papaNoelOff");
let btnAudio = new Audio('./assets/aud/allWant.mp3')
let btnPlay = document.getElementById("play");
let btnPausa = document.getElementById("pausa");

btnPlay.disabled = true;
btnPausa.disabled = true;
btnPlay.style.background.white


function song(btn){
    if (btn ===1){
        btnAudio .play();
    }
    else{
        btnAudio.pause();
    }
}
// console.log(obtenerTiempoFaltante('Dec 25 2023 00:00:00 GMT-0500'));

function cuentaRegresiva(tiempoFaltante, reloj, ){
    const e = document.getElementById(reloj);
    let d = document.getElementById("dia");
    let h = document.getElementById("hora");
    let m = document.getElementById("minutos");
    let s = document.getElementById("segundo");
    let mensaje = document.getElementById("mensaje")

    
    const tiempoActual = setInterval (() =>{
        let t = obtenerTiempoFaltante(tiempoFaltante);
        
        if(t.tiempoFaltante <1){
            clearInterval(tiempoActual);
            mensaje.innerHTML= "¡Feliz Navidad!";
            papaNoel.classList.add("on")
            btnPlay.classList.remove("white")
            btnPausa.classList.remove("white")
            btnPlay.disabled = false;
            btnPausa.disabled = false;
            d.innerHTML = "00";
            h.innerHTML = "00"
            m.innerHTML = "00"
            s.innerHTML = "00"
        }
        else{
            mensaje.innerHTML= "Falta para Navidad"
            btnPlay.classList.add("white")
            btnPausa.classList.add("white")
            d.innerHTML = t.diasFaltante
            h.innerHTML = t.horasFaltante
            m.innerHTML = t.minutosFaltante
            s.innerHTML = t.segundFaltante
        }
    }, 1000);
}


cuentaRegresiva(`Nov 21 2023 17:24:00 GMT-0500`, `cuentaRegresiva`)