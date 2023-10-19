// Selecciona el elemento con el id "display" y los botones en el documento HTML
const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

// Itera a través de los botones y agrega un evento "click" a cada uno
buttons.forEach((item) => {
    item.onclick = () => {
        // Maneja diferentes casos según el id del botón
        if (item.id == "clear") {
            // Borra el contenido del display
            display.innerText = "";
        } else if (item.id == "backspace") {
            // Elimina el último carácter del contenido del display
            let string = display.innerText.toString();
            display.innerText = string.substr(0, string.length - 1);
        } else if (display.innerText != "" && item.id == "equal") {
            // Evalúa la expresión matemática en el display y muestra el resultado
            display.innerText = eval(display.innerText);
        } else if (display.innerText == "" && item.id == "equal") {
            // Si no hay contenido en el display y se presiona "equal", muestra "Null" temporalmente
            display.innerText = "Null";
            setTimeout(() => (display.innerText = ""), 2000);
        } else {
            // Agrega el contenido del botón al display
            display.innerText += item.id;
        }
    };
});

// Selecciona el botón de alternar tema y el elemento de la calculadora
const themeToggleBtn = document.querySelector(".theme-toggler");
const calculator = document.querySelector(".calculator");

let isDark = false;

// Agrega un evento "click" para alternar el tema oscuro y claro
themeToggleBtn.onclick = () => {
    calculator.classList.toggle("dark"); // Aplica una clase "dark" al elemento de la calculadora
    themeToggleBtn.classList.toggle("active"); // Aplica una clase "active" al botón de alternar tema
    isDark = !isDark; // Alterna la variable "isDark" entre true y false
}
