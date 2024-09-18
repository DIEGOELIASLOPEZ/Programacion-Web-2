let carrito = [];

let camisa = {
    nombre: "Camisa",
    precio: 300,
    cantidad: 0
};

let pantalon = {
    nombre: "Pantalon",
    precio: 500,
    cantidad: 0
};

let zapatos = {
    nombre: "Zapatos",
    precio: 800,
    cantidad: 0
};

let sombrero = {
    nombre: "Sombrero",
    precio: 200,
    cantidad: 0
};

function menuArticulos() {
    return parseInt(prompt(`Seleccione el producto para agregar al carrito:
                                    1. Camisa $${camisa.precio}.
                                    2. Pantalon $${pantalon.precio}.
                                    3. Zapatos $${zapatos.precio}.
                                    4. Sombrero $${sombrero.precio}.
                                    5. Ver Carrito.
                                    6. Salir.`));
}

function verCarrito() {
    if (carrito.length === 0) {
        console.log("El carrito está vacío.");
    } else {
        console.log("Carrito de compras:");
        for (let i = 0; i < carrito.length; i++) {
            if(carrito[i] == camisa){
                console.log(`${i + 1}. ${camisa.nombre}     -    (${camisa.cantidad})    -   $${camisa.precio * camisa.cantidad}`);
            }else if(carrito[i] == pantalon){
                console.log(`${i + 1}. ${pantalon.nombre}   -    (${pantalon.cantidad})    -   $${pantalon.precio * pantalon.cantidad}`);
            }else if(carrito[i] == zapatos){
                console.log(`${i + 1}. ${zapatos.nombre}    -    (${zapatos.cantidad})    -   $${zapatos.precio * zapatos.cantidad}`);
            }else if(carrito[i] == sombrero){
                console.log(`${i + 1}. ${sombrero.nombre}   -    (${sombrero.cantidad})    -   $${sombrero.precio * sombrero.cantidad}`);
            }
        
        }
        console.log(`TOTAL: $${(sombrero.precio * sombrero.cantidad) + (zapatos.precio * zapatos.cantidad) + (pantalon.precio * pantalon.cantidad) + (camisa.precio * camisa.cantidad)}`);

    }
}

function agregarProducto(producto) {
    let encontrado = carrito.find(objeto => objeto.nombre == producto.nombre);
    if (encontrado) {
        encontrado.cantidad += 1; // Si el producto ya está en el carrito, solo aumenta la cantidad
    } else {
        producto.cantidad = 1; // Si el producto no está en el carrito, lo agrega con cantidad 1
        carrito.push(producto);
    }
}

function iniciarPrograma() {
    let continuar = true;
    while (continuar) {
        let opcion = menuArticulos();
        switch (opcion) {
            case 1:
                console.log("Se agregó una camisa al carrito");
                agregarProducto(camisa);
                break;
            case 2:
                console.log("Se agregó un pantalón al carrito");
                agregarProducto(pantalon);
                break;
            case 3:
                console.log("Se agregó un par de zapatos al carrito");
                agregarProducto(zapatos);
                break;
            case 4:
                console.log("Se agregó un sombrero al carrito");

                agregarProducto(sombrero);
                break;
            case 5:
                verCarrito();
                break;
            case 6:
                continuar = false;
                console.log("Saliendo del programa...");
                break;
            default:
                console.log("Opción no válida.");
                break;
        }
    }
}

iniciarPrograma();
