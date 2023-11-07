let eventos =[];
// este arreglo me lo va aguardar en el jeisson

// jeison lo mantenga en el local de nosotros 
let arr = [];


// llamamos por el id 
const nombreEvento = document.querySelector("#nombreEvento");
const fechaEvento = document.querySelector("#fechaEvento");
const botonAgregar = document.querySelector("#agregar");
const listaEventos = document.querySelector("#listaEventos");

const json = cargar();

// revise lo que se envuentre en el local strorage y revise el arreglo y si nop hay nada pues dejelo en cero

try{
   arr = JSON.parse(json);

}catch (error) {
    arr= []
}
eventos= arr?[...arr] : [];

mostarEventos();
// muestre lo que existe 

// el boton limpia el input que esta con tipo text va a limpiar la pantalla que se muestre abajo el evento 

// el form no lleva ni punto ni nada por que se llama el evento completo, escucha los eventos (formulario y fecha) y los muestra 
document.querySelector("form").addEventListener("submit", e =>{
    e.preventDefault();
     agregarEvento();
});


function agregarEvento() {
    if (nombreEvento.value === "" || fechaEvento.value === "") {
        return
    }

    // si la fwcha es inferior a la fecha actual le digo que retorne vacio y no puede ingresar evento anterior a la fecha actual 
    if (diferenciarFecha(fechaEvento.value) <0) {
     return ;   
    }

    const nuevoEvento = {
        // me de un numero a la zar y lo multiplico por 100 y me lo vuelva un strin y me envie solo 3 posiciones
         id:(Math.random()*100).toString(36).slice(3),
         nombre: nombreEvento.value,
         fecha: fechaEvento.value,

    };
    //  con un unshift envia todo al nuevoEVENTO Y LO GUARADA EN EL ARREGLO 
    eventos.unshift(nuevoEvento);
    guardar(JSON.stringify(eventos));

    // le pido que me deje el evento vacio para que vuelva y lo llene 
    nombreEvento.value = "";


    mostarEventos();

}


function diferenciarFecha(destino){
    let fechaDestino = new Date(destino);
    let fechaActual = new Date();


    // cuantos dias hay entre la fecha de destino o enre la fecha actual con el get time me va a traer el dia y la fecha 
     let diferencia = fechaDestino.getTime() - fechaActual.getTime();

    //  me trae numero entero mas cercano me redondee el numero y no me lo deje en decimal 
    let dias = Math.ceil(diferencia / (1000 * 3600 * 24));
    // devolverse con los dias 
    return dias;
}

function mostarEventos (){
    // se dibuja con un evento de map para haer un mapeo
    // va a dibujar los eventos en eevneto  
    const eventosHTML = eventos.map((evento) => {
        return `
        
        <div class="evento">
           <div class="dias">
           <span class="diasFaltantes">${diferenciarFecha(evento.fecha)}</span> 
           <span class="texto"> dias para</span>
           </div>

            <div class="nombreEvento">${evento.nombre}</div>
            <div class="fechaEvento">${evento.fecha}</div>
            <div class="acciones">
            <!-- le de un id a cada boton para luego solo eliminar los eventos que to necesite elminar y no todos y para eso tenga en cuenta el id del evento --> 
            <button data-id="${evento.id}" class="eliminar">Eliminar</eliminar>
            </div>

           
        </div>
        
        `;
    });
    listaEventos.innerHTML = eventosHTML.join("");
    document.querySelectorAll('.eliminar').forEach(button => {
        // cuando escuche el click traer el id y que me elimine el id que le solicite
        button.addEventListener("click", e => {
            const id = button.getAttribute('data-id');
            eventos = eventos.filter(evento => evento.id !== id);

            guardar(JSON.stringify(eventos));
            
            mostarEventos();
        });
    });
}

// xelene perdida

function guardar(datos){
    // con esta funcion quedan guarados en el locasto 
    localStorage.setItem("lista", datos);
}

function cargar(){
    // se regrea yhace un retorno y odtiene lo de la liosta y o develve 
    return localStorage.getItem("lista")
}



// funcion qye me indique la diferencia de dias y que si el dia ya paso no me permita pasar 