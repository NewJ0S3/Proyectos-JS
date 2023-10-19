// Selecciona el botón de alternar menú y el elemento de navegación en el documento HTML
const menuToggle = document.querySelector(".menuToggle");
const navigation = document.querySelector(".navigation");

// Agrega un evento "click" al botón de alternar menú
menuToggle.onclick = function() {
    navigation.classList.toggle("open"); // Alterna la clase "open" en el elemento de navegación
}

// Selecciona todos los elementos con la clase "list"
const list = document.querySelectorAll(".list");

// Define una función para activar el enlace seleccionado
function activateLink() {
    // Remueve la clase 'active' de todos los elementos con la clase "list"
    list.forEach((item) => item.classList.remove('active'));
    // Agrega la clase 'active' al elemento en el que se hizo clic
    this.classList.add('active');
}

// Agrega un evento "click" a cada elemento con la clase "list" que activa la función activateLink
list.forEach((item) => 
    item.addEventListener('click', activateLink)
)
