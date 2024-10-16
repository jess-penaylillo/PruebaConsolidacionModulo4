class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = parseFloat(precio);
    }
}

class Carrito {
    constructor() {
        this.productos = [];
    }

    agregarProducto(producto, cantidad) {
        for (let i = 0; i < cantidad; i++) {
            this.productos.push(producto);
        }
        alert(`${cantidad} ${producto.nombre}(s) agregado(s) al carrito.`);
    }

    calcularTotal() {
        return this.productos.reduce((total, producto) => total + producto.precio, 0).toFixed(2);
    }

    finalizarCompra() {
        if (this.productos.length > 0) {
            alert(`Total de la compra: $${this.calcularTotal()}`);
            this.productos = [];
        } else {
            alert("El carrito está vacío.");
        }
    }
}

// Lista de productos disponibles
const productosDisponibles = [
    new Producto("Leche", 1000),
    new Producto("Pan de Molde", 2000),
    new Producto("Queso", 1200),
    new Producto("Mermelada", 890),
    new Producto("Azúcar", 1300)
];

// Función para mostrar los productos disponibles
function mostrarProductosDisponibles() {
    let mensaje = "Productos disponibles:\n";
    productosDisponibles.forEach((producto, index) => {
        mensaje += `${index + 1}.- ${producto.nombre} $${producto.precio}\n`;
    });
    alert(mensaje);
}

// Inicializar carrito
const carrito = new Carrito();

// Función para iniciar el flujo de agregar productos
function iniciarCompra() {
    let seguirAgregando = true;

    while (seguirAgregando) {
        mostrarProductosDisponibles();

        // Solicitar número del producto
        let numeroProducto = parseInt(prompt("Ingresa el número del producto que deseas agregar al carrito:"));
        
        while (isNaN(numeroProducto) || numeroProducto < 1 || numeroProducto > productosDisponibles.length) {
            numeroProducto = parseInt(prompt("Número no válido. Ingresa el número correcto del producto:"));
        }

        const productoSeleccionado = productosDisponibles[numeroProducto - 1];

        // Solicitar cantidad
        let cantidad = parseInt(prompt(`Ingresa la cantidad de ${productoSeleccionado.nombre}(s) que deseas comprar:`));

        while (isNaN(cantidad) || cantidad <= 0) {
            cantidad = parseInt(prompt("Cantidad no válida. Ingresa una cantidad correcta:"));
        }

        carrito.agregarProducto(productoSeleccionado, cantidad);

        // Preguntar si quiere seguir agregando productos
        seguirAgregando = confirm("¿Desea seguir agregando productos? (Aceptar = Sí, Cancelar = No)");
    }

    // Finalizar la compra
    carrito.finalizarCompra();
}

// Agregar evento al botón para iniciar la compra
document.getElementById('iniciarCompraBtn').addEventListener('click', iniciarCompra);
