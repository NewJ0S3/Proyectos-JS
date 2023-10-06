//Aqui desestructuramos los datos que importamos de ciudades.js

import { barcelona, roma, paris, londres } from "./ciudades.js";

// Capturamos los elementos del DOM

let enlaces = document.querySelectorAll("a");
let tituloElemento = document.getElementById("titulo");
let subtituloElemento = document.getElementById("subtitulo");
let parrafoElemento = document.getElementById("parrafo");
let precioElemento = document.getElementById("precio");

//Bucle forEach para recorrer cada elemento y agregar un evento CLICK a cada enlace

enlaces.forEach(function(enlace){
    enlace.addEventListener("click", function(){
        enlaces.forEach(function(enlace){
            //Remover clase active en HTML con JS
            enlace.classList.remove("active"); 
        });
    //Agregar clase active en HTML con JS
    this.classList.add("active"); 

    //Traer la informacion del objeto correspondiente a la eleccion
    let contenido = obtenerContenido(this.textContent);

    //Mostrar el contenido en el DOM
    tituloElemento.innerHTML = contenido.titulo;
    subtituloElemento.innerHTML = contenido.subtitulo;
    parrafoElemento.innerHTML = contenido.parrafo;
    precioElemento.innerHTML = contenido.precio;
    });
});

//Funcion para traer la informacion correcta desde ciudades.js
function obtenerContenido(enlace){
    let contenido = {
        "Barcelona": barcelona,
        "Roma": roma,
        "París": paris,
        "Londres": londres,
    };
    return contenido[enlace];
};