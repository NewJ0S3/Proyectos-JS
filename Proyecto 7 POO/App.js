// Definición de la clase Product
class Product {
    constructor(name, price, year) {
        this.name = name;
        this.price = price;
        this.year = year;
    }
}

// Definición de la clase UI (Interfaz de Usuario)
class UI {
    // Método para agregar un producto a la lista
    addProduct(product) {
        const list = document.getElementById("product-list");
        const element = document.createElement("div");
        element.innerHTML = `
            <div class="card text-center m-3">
                <div class="card-body">
                    <strong>Nombre</strong>: ${product.name}
                    <strong>Precio</strong>: ${product.price}
                    <strong>Año</strong>: ${product.year}
                    <a name="delete" href="#" class="btn btn-danger m-2">Eliminar</a>
                </div>
            </div>
        `;
        list.appendChild(element);
    }

    // Método para reiniciar el formulario
    resetForm() {
        document.getElementById("product-form").reset();
    }

    // Método para eliminar un producto de la lista
    removeProduct(element) {
        if (element.name === "delete") {
            element.parentElement.parentElement.parentElement.remove();
            this.showMessage("Producto eliminado", "danger");
        }
    }

    // Método para mostrar mensajes en la interfaz
    showMessage(message, cssClass) {
        const div = document.createElement("div");
        div.className = `alert alert-${cssClass} mt-2`;
        div.appendChild(document.createTextNode(message));
        // Mostrando en el DOM
        const container = document.querySelector(".container");
        const app = document.querySelector("#App");
        container.insertBefore(div, app);
        setTimeout(function () {
            document.querySelector(".alert").remove();
        }, 2000);
    }
}

// Eventos del DOM

// Manejar el envío del formulario
document.getElementById("product-form").addEventListener("submit", function (e) {
    const name = document.getElementById("name").value;
    const price = document.getElementById("price").value;
    const year = document.getElementById("year").value;

    const product = new Product(name, price, year);

    const ui = new UI();

    if (name === "" || price === "" || year === "") {
        return ui.showMessage("Completa el formulario", "warning");
    }

    ui.addProduct(product);
    ui.resetForm();
    ui.showMessage("Producto agregado", "success");

    e.preventDefault();
});

// Manejar los clics en la lista de productos
document.getElementById("product-list").addEventListener("click", function (e) {
    const ui = new UI();
    ui.removeProduct(e.target);
});
