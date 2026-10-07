let ultimaPosicion = 0;

window.addEventListener("scroll", function () {

    const nav = document.querySelector("nav");
    const posicionActual = window.scrollY;

    if (posicionActual > ultimaPosicion && posicionActual > 100) {
        nav.classList.add("ocultar");
    } else {
        nav.classList.remove("ocultar");
    }

    ultimaPosicion = posicionActual;
});

modal = document.getElementById('modal');
let contenido = { 'titulo': 'Elaboracion de algoritmos' }

function abrirVentana() {

    //document.getElementById("ventana").style.display = "block";
    modal.innerHTML = `<h2>${contenido.titulo}</h2>`;


    modal.showModal()
}


function cerrarVentana() {

    document.getElementById("ventana").style.display = "none";

}

//Carrusel

