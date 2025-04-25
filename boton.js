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
  const slides = document.querySelectorAll(".slide");
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) {
      slide.classList.add("active");
    }
  });
}

function changeSlide(n) {
  const slides = document.querySelectorAll(".slide");
  currentSlide = (currentSlide + n + slides.length) % slides.length;
  showSlide(currentSlide);
}

// Muestra el primer slide al cargar la página
showSlide(currentSlide);

// Boton NOCHE DIA//

let modo = document.getElementById("modo");
let body = document.body;

modo.addEventListener("click", function () {
  body.classList.toggle("noche");
});


let mostrarfecha = document.getElementById("fecha");
let mostrarreloj = document.getElementById("reloj");

let fechaObjetivo = new Date("2025-12-31T23:59:59");

setInterval(() => {
  let ahora = new Date();
  let tiempoRestante = fechaObjetivo - ahora;

  if (tiempoRestante > 0) {
    let dias = Math.floor(tiempoRestante / (1000 * 60 * 60 * 24));
    let horas = Math.floor((tiempoRestante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutos = Math.floor((tiempoRestante % (1000 * 60 * 60)) / (1000 * 60));
    let segundos = Math.floor((tiempoRestante % (1000 * 60)) / 1000);
    mostrarfecha.innerHTML = `Días restantes para el 5 de Mayo del 2025`;
    mostrarreloj.innerHTML = ` ${dias} días, ${horas} horas, ${minutos} minutos y ${segundos} segundos`;
  } else {
    mostrarfecha.innerHTML = "¡La cuenta regresiva ha terminado!";
    mostrarreloj.innerHTML = "";
  }
}, 1000);
