// Inicialización de variables
let tarjetasDestapadas = 0;
let tarjeta1 = null;
let tarjeta2 = null;
let primerResultado = null;
let segundoResultado = null;
let movimientos = 0;
let aciertos = 0;
let temporizador = false;
let tiempo = 30; // Tiempo en segundos
let tiempoInicial = tiempo;
let tiempoRegresivoId = 0;

// Elementos HTML para mostrar información
let mostrarMovimientos = document.getElementById('movimientos');
let mostrarAciertos = document.getElementById('aciertos');
let mostrarTiempo = document.getElementById('t-restante');

// Elementos de audio
let winAudio = new Audio('./sonidos/win.wav');
let loseAudio = new Audio('./sonidos/lose.wav');
let clickAudio = new Audio('./sonidos/click.wav');
let rightAudio = new Audio('./sonidos/right.wav');
let wrongAudio = new Audio('./sonidos/wrong.wav');

// Creación de una matriz con números y su duplicado
let numeros = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];
numeros = numeros.sort(() => {
    return Math.random() - 0.5;
});
console.log(numeros);

// Función para contar el tiempo regresivo
function contarTiempo() {
    tiempoRegresivoId = setInterval(() => {
        tiempo--;
        mostrarTiempo.innerHTML = `Tiempo: ${tiempo} segundos`;
        if (tiempo == 0) {
            clearInterval(tiempoRegresivoId);
            bloquearTarjetas();
            loseAudio.play();
        }
    }, 1000);
}

// Función para bloquear todas las tarjetas al final del tiempo
function bloquearTarjetas() {
    for (let i = 0; i <= 15; i++) {
        let tarjetaBloqueada = document.getElementById(i);
        tarjetaBloqueada.innerHTML = `<img src="./imagenes/${numeros[i]}.png">`;
        tarjetaBloqueada.disabled = true;
    }
}

// Función para destapar las tarjetas al hacer clic
function destapar(id) {
    if (temporizador == false) {
        contarTiempo();
        temporizador = true;
    }

    tarjetasDestapadas++;

    if (tarjetasDestapadas == 1) {
        tarjeta1 = document.getElementById(id);
        primerResultado = numeros[id];
        tarjeta1.innerHTML = `<img src="./imagenes/${primerResultado}.png">`;
        clickAudio.play();
        tarjeta1.disabled = true;
    } else if (tarjetasDestapadas == 2) {
        tarjeta2 = document.getElementById(id);
        segundoResultado = numeros[id];
        tarjeta2.innerHTML = `<img src="./imagenes/${segundoResultado}.png">`;

        tarjeta2.disabled = true;
        movimientos++;
        mostrarMovimientos.innerHTML = `Movimientos: ${movimientos}`;

        if (primerResultado == segundoResultado) {
            tarjetasDestapadas = 0;
            aciertos++;
            mostrarAciertos.innerHTML = `Aciertos: ${aciertos}`;
            rightAudio.play();

            if (aciertos == 8) {
                clearInterval(tiempoRegresivoId);
                mostrarAciertos.innerHTML = `Aciertos: ${aciertos} 😎`;
                mostrarTiempo.innerHTML = `Fantástico! ✨ Solo tardaste ${tiempoInicial - tiempo} segundos`;
                mostrarMovimientos.innerHTML = `Movimientos: ${movimientos} 😄`;
                winAudio.play();
            }
        } else {
            wrongAudio.play();
            setTimeout(() => {
                tarjeta1.innerHTML = ' ';
                tarjeta2.innerHTML = ' ';
                tarjeta1.disabled = false;
                tarjeta2.disabled = false;
                tarjetasDestapadas = 0;
            }, 800);
        }
    }
}
