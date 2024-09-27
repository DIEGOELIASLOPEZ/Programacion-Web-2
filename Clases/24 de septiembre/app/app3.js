


alert("Ejercicio 1")


let mensaje = ""

for (let i = 0; i < 4; i++) {
    mensaje += 'x';
}
alert(mensaje)


alert("Ejercicio 2")

mensaje = ""
for (let i = 0; i < 4; i++) {
    mensaje += 'x\n';
}
alert(mensaje)


alert("Ejercicio 2");

mensaje = ""



let fila = prompt("Número de →");
let columna = prompt("Número de ↓");


for (let i = 0; i < columna; i++) {
    if (i == 0) {
        for (let j = 0; j < fila; j++) {
            mensaje += "x";
        }
    } else {
        mensaje += "x";
    }
    mensaje += "\n"; 
}

alert(mensaje);



alert("Ejercicio C");
let filas = 4;
let columnas = 4;

mensaje = ""; 

for (let i = 0; i < filas; i++) {
    for (let j = 0; j < columnas; j++) {
        mensaje += "x"; 
    }
    mensaje += "\n";  
}

alert(mensaje);



alert("Ejercio D");

let tabla = parseInt(prompt("Que tabal de mnultiplicar quieres?"))
let resultado = tabla
for (let i = 1; i <= 10; i++) {
    if (resultado == tabla) {
        resultado += ` x ${i} = ${tabla*i} \n`
    }
    resultado += `${tabla} x ${i} = ${tabla*i} \n`
    
}
alert(resultado)