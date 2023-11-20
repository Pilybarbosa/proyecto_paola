const body = document.querySelector("body");
const toggle = document.getElementById("toggle");

// toggle
// este metd por defecto va estar el true  y si los preciono en se va a false y se la pasa intercambiando estos valores

toggle.addEventListener('click', () => {
    toggle.classList.toggle("toggleBlanco");
    body.classList.toggle("toggleBlanco");
    // la clase de toggles se crea en el css 
    
})