let compras = [];
let fruta = prompt("Ingresa una fruta?");

compras.push(fruta);


while(confirm("Ingresa una fruta al carrito")){

    let frutados =prompt("Ingresa otra furuta: ");
    compras.push(frutados);
    
}
/*
console.log("Las frutas que compraste son:");
for (let furtas of compras) {
    console.log(furtas);
}
    */

compras.forEach((fruta, indice) => {
    console.log(`${indice + 1}. ${fruta}`);
});
