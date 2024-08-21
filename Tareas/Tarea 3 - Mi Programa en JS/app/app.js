alert("Hola");

let nombre = prompt("Ingresa tu nombre: ");
let edad = prompt("Ingresa tu edad: ");
let estatura = parseFloat(prompt("Indica tu estatura (m): "));
let peso = parseFloat(prompt("Actualmente, ¿Cuál es tu peso? (kg)"));

let masa_corporal = peso / (estatura * estatura)

console.log("Nombre: " + nombre);
console.log("Edad: " + edad + " años");
console.log("\nEstatura: " + estatura + "m");
console.log("Peso: " + peso + "kg");

console.log("\nMasa corporal: " + masa_corporal);

if (masa_corporal < 18.5) {
    console.log("Estas Bajo de Peso");
} else if (masa_corporal >= 18.5 && masa_corporal < 24.9) {
    console.log("Tu peso esta equilobrado, bien hecho");
} else if (masa_corporal == 25.0 && masa_corporal <29.9){
    console.log("Tienes Sobrepreso")

}else{
    console.log("Tienes Obesidad")
}




