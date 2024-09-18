let carrito = [];
//Se declaran las los Objetos tipo Json 
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


// Funcion para mostrar las diferentes opciones que se pueden escoger, desde los 4 articulos como ver el carrtio y salir de este menu
function menuArticulos() {
    return parseInt(prompt(`Seleccione el producto para agregar al carrito:
                                    1. Camisa $${camisa.precio}.
                                    2. Pantalon $${pantalon.precio}.
                                    3. Zapatos $${zapatos.precio}.
                                    4. Sombrero $${sombrero.precio}.
                                    5. Ver Carrito.
                                    6. Salir.`));
}


//Funcion para ver los productos ya agregados al carrtio con su respectiva cantidad(numero de productos seleccionados) con su precio respectivo dependiendo la cantidad de productos
//fueron seleccionados como el precio total
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

//Funcion que sirve para ver que producto esta ya agregado al arreglo usando una funcion flecha
function agregarProducto(producto) {
    let encontrado = carrito.find(objeto => objeto.nombre == producto.nombre);
    if (encontrado) {
        encontrado.cantidad += 1; 
    } else {
        producto.cantidad = 1; 
        carrito.push(producto);
    }
}

// junta las anteriores funciones establecidas, se realiza un bucle while, dentro se agrega la funcion de mostrar menu, usando la estrucutra de control switch agregamos de acuerdo a cada caso 
// la funcion agregar producto con su respectivo objeto o dar la opcion de ver el carrito o salir =)
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
