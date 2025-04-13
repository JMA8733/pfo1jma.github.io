

document.addEventListener("DOMContentLoaded", function () {
    const abrir = document.getElementById("abrir-modal");
    const cerrar = document.getElementById("cerrar-modal");
    const modal = document.getElementById("modal");
    const enviar = document.getElementById("enviar-btn");

    abrir.addEventListener("click", function (e) {
        e.preventDefault();
        modal.classList.add("modal--show");
    });

    cerrar.addEventListener("click", function (e) {
        e.preventDefault();
        modal.classList.remove("modal--show");
    });

    // Cerrar si se hace clic fuera del modal
    window.addEventListener("click", function (e) {
        if (e.target === modal) {
            modal.classList.remove("modal--show");
        }
    });
});


let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}

function changeSlide(n) {
    const slides = document.querySelectorAll('.slide');
    currentSlide = (currentSlide + n + slides.length) % slides.length;
    showSlide(currentSlide);
}

// Muestra el primer slide al cargar la página
showSlide(currentSlide);
