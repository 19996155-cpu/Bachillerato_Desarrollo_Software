let slideActual = 0;

const slides = document.querySelectorAll(".slide");
const puntos = document.querySelectorAll(".punto");

function mostrarSlide(numero) {

    slides.forEach(slide => {
        slide.classList.remove("activo");
    });

    puntos.forEach(punto => {
        punto.classList.remove("activo-punto");
    });

    slides[numero].classList.add("activo");
    puntos[numero].classList.add("activo-punto");

    slideActual = numero;
}


function cambiarSlide(direccion) {

    slideActual += direccion;

    if (slideActual >= slides.length) {
        slideActual = 0;
    }

    if (slideActual < 0) {
        slideActual = slides.length - 1;
    }

    mostrarSlide(slideActual);
}


function irSlide(numero) {
    mostrarSlide(numero);
}

setInterval(() => {
    cambiarSlide(1);
}, 5000);