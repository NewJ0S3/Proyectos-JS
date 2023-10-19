// Selecciona el elemento 'body' en el documento HTML
const body = document.querySelector('body');

// Selecciona el elemento con el id 'toggle' en el documento HTML
const toggle = document.getElementById('toggle');

// Agrega un evento "click" al elemento con id 'toggle'
toggle.onclick = function() {
    toggle.classList.toggle('active'); // Alterna la clase 'active' en el elemento 'toggle'
    body.classList.toggle('active'); // Alterna la clase 'active' en el elemento 'body'
}
