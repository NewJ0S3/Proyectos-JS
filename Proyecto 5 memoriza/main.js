// Inicializacion de variables
let tarjetasDestapadas = 0;
let tarjeta1 = null;
let tarjeta2 = null;
let primerResultado = null;
let segundoResultado = null;
let movimientos = 0;
let aciertos = 0;
let temporizador = false;
let tiempo = 30000; 
let tiempoInicial = tiempo;
let tiempoRegresivoId = 0;

//Apuntando a documento HTML

let mostrarMovimientos = document.getElementById('movimientos');
let mostrarAciertos = document.getElementById('aciertos');
let mostrarTiempo = document.getElementById('t-restante');

// sonidos

let winAudio = new Audio('./sonidos/win.wav');
let loseAudio = new Audio('./sonidos/lose.wav');
let clickAudio = new Audio('./sonidos/click.wav');
let rightAudio = new Audio('./sonidos/right.wav');
let wrongAudio = new Audio('./sonidos/wrong.wav');

// numeros aleatorios

let numeros = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];
    numeros = numeros.sort(()=>{
        return Math.random()-0.5
});
console.log(numeros);

//Funciones

function contarTiempo() {
    tiempoRegresivoId = setInterval(()=>{
        tiempo--;
        mostrarTiempo.innerHTML = `Tiempo: ${tiempo} segundos`
        if (tiempo == 0) {
            clearInterval(tiempoRegresivoId);
            bloquearTarjetas();
            loseAudio.play();
        }
    },1000);
}

function bloquearTarjetas() {
    for (let i = 0; i <= 15; i++) {
        let tarjetaBloqueada = document.getElementById(i);
        tarjetaBloqueada.innerHTML = `<img src="./imagenes/${numeros[i]}.png">`;
        tarjetaBloqueada.disabled = true;
    }
}

// funcion principal
function destapar(id) {

    if (temporizador == false) {
        contarTiempo();
        temporizador = true;
    }

    tarjetasDestapadas++;
    console.log(tarjetasDestapadas);

    if (tarjetasDestapadas == 1) {
        // Mostrar primer numero
        tarjeta1 = document.getElementById(id);
        primerResultado = numeros[id];
        tarjeta1.innerHTML = `<img src="./imagenes/${primerResultado}.png">`;
        clickAudio.play();

        //Deshabilitar primer boton
        tarjeta1.disabled = true;

    } else if (tarjetasDestapadas == 2) {
        // Mostrar segundo numero
        tarjeta2 = document.getElementById(id);
        segundoResultado = numeros[id];
        tarjeta2.innerHTML = `<img src="./imagenes/${segundoResultado}.png">`;

        //Deshabilitar primer boton
        tarjeta2.disabled = true;

        //Incrementar movimientos
        movimientos++;
        mostrarMovimientos.innerHTML = `Movimientos: ${movimientos}`;

        if (primerResultado == segundoResultado) {
            //Encerrar contador tarjetas destapadas
            tarjetasDestapadas = 0;

            //Aumentar aciertos 
            aciertos++;
            mostrarAciertos.innerHTML = `Aciertos: ${aciertos}`;

            rightAudio.play();

            if (aciertos == 8) {
                clearInterval(tiempoRegresivoId);
                mostrarAciertos.innerHTML = `Aciertos: ${aciertos} 😎`;
                mostrarTiempo.innerHTML = `Fantastico!✨ Solo tardaste ${tiempoInicial - tiempo} segundos`
                mostrarMovimientos.innerHTML = `Movimientos: ${movimientos} 😄`;
                winAudio.play();
            }

        } else {
            //Mostrar momentaneamente y volver a tapar
            wrongAudio.play();
            setTimeout(()=>{
                tarjeta1.innerHTML = ' ';
                tarjeta2.innerHTML = ' ';
                tarjeta1.disabled = false;
                tarjeta2.disabled = false;
                tarjetasDestapadas = 0;
            },800)
        }
    }
}