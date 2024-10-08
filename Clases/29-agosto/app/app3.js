let frutas = ["Manzana","Pera","Uvas"];

contador = parseInt(1)

console.log("\n-----------")
console.log("FOR CLASICO")
for (let i = 0; i < frutas.length; i++) {
 
    console.log(contador+". " + frutas[i]);
    contador ++;
}
console.log("-----------\n")

console.log("\n-----------")
console.log("For OF")
contador = parseInt(1)
for (let fruta of frutas) {
    console.log(contador+". " +fruta);  // Manzana, Banana, Cereza
    contador ++;
}
console.log("-----------\n")

console.log("\n-----------")
console.log("For IN")
contador = parseInt(1)
for (let fruta in frutas) {
    console.log(contador+". " +fruta);  // Manzana, Banana, Cereza
    contador ++;
}
console.log("-----------\n")