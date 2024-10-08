let carrito = [];
let continuar = true;

let fruta = prompt("Ingresa una fruta: ");
carrito.push(fruta);


while (confirm("¿Deseas agregar otra fruta?")) {
    fruta = prompt("Ingresa una fruta: ");
    carrito.push(fruta);
}

let articulos = "Usted compro:\n";

carrito.forEach((elemento, index) => {
    articulos += `${index+1}.- ${elemento}\n`
});

alert(articulos);






