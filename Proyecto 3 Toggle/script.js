// Selecciona el botón de alternar y el contenedor en el documento HTML
let toggleBtn = document.querySelector(".toggleBtn");
let container = document.querySelector(".container");

// Agrega un evento "click" al botón de alternar
toggleBtn.onclick = function() {
    container.classList.toggle('active'); // Alterna la clase 'active' en el contenedor
}
