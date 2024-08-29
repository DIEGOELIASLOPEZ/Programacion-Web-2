let numero_random = Math.floor(Math.random() * (10 - 1) + 1);
console.log(numero_random)



let vidas;
vidas = parseInt(vidas);
vidas = 3;
let ciclo = false;
console.log(ciclo)


while(ciclo == false){
    let usuario = prompt("Escrribe un numero del 1 al 10");
    if (usuario == numero_random){
        console.log("Haz Acertado, el numero es " + numero_random);
        document.body.style.backgroundColor = "green";
        break
    }else{
        vidas = vidas-1
        console.log("El numero que escogiste no es el correcto\nVidas: " + vidas)
        if (numero_random>usuario){
            console.log("El numero es mayor a " + usuario)

        }else{
            console.log("El numero es menor av" + usuario)
        }
        if (vidas == 0){
            console.log("Peridste, ya tienes vidas")
            break
        }
        document.body.style.backgroundColor = "brown";
    }
    
    
}
