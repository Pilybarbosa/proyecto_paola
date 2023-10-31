let hr=mn=sg=ms="0" +0, iniciarTiempo;

const botonIniciar = document.querySelector(".iniciar");
const botonDetener = document.querySelector(".detener");
const botonReiniciar = document.querySelector(".reiniciar");

botonIniciar.addEventListener("click", iniciar);
botonDetener.addEventListener("click", detener);
botonReiniciar.addEventListener("click", reiniciar);


function iniciar(){
    botonIniciar.classList.add("on");
    iniciarTiempo=setInterval(()=>{
        /* aumente de 1 en 1 */
            ms++;
            ms=ms<10?"0"+ms:ms;


            /* valdación para que cuan do los millisegundo son iguales 100 se le cambie el segundo (contar de 1 en 1) */

            if (ms===100) {
                sg++;
                sg=sg<10?"0"+sg:sg;
                ms = "0" + 0 ;
            }

            if (sg==60) {
                mn++;
                mn=mn<10?"0"+mn:mn;
                sg="0"+0;
            }

            if (mn==60) {
                hr++;
                hr=hr<10?"0"+hr:hr;
                mn="0"+0;

                }
            //  detner tiempo y reiniciarlo 
            ingresarValor();

    
    }, 10);
}

function detener(){
    // para el intervalo para que quede limpio
    botonIniciar.classList.remove("on");
    // limpie el intervalo que esta en esta funcion 
    clearInterval(iniciarTiempo);

}

function reiniciar(){
    botonIniciar.classList.remove("on");
    // limpie el intervalo del tiempo y iniciar de cero 
    clearInterval(iniciarTiempo);
    // reiniciar :) 
    hr=mn=sg=ms="0"+0;
    ingresarValor();

}

function ingresarValor(){
    // actualiza la funcion y los valores 
    document.querySelector('.milisegundo').innerHTML=ms;
    document.querySelector('.segundo').innerHTML=sg;
    document.querySelector('.minuto').innerHTML=mn;
    document.querySelector('.hora').innerHTML=hr;
}
