function numero_randon(){
    random = Math.floor(Math.random()*(10-1)+1);
    return random
}

function vidas(){
    return 3;

}

function numero_usuario(){
    return parseInt(prompt("Escribe el número ganador: "));
}


function adivina_random(numero_randon, vidas){
    ciclo = false;
    
    while(ciclo == false){
        let numero = numero_usuario();
        if(numero_randon==numero){
            document.body.style.backgroundColor = "#3db62d";
            console.log("Has acertador correctamente, el numero ganador es "+numero_randon);
            console.log("Vidas: " + vidas);
            ciclo = true
        }else{
            vidas--;
            
            console.log("Incorrecto ):")
            console.log("Vidas restantes: "+vidas)
            if (vidas ==0){
                console.log("Has Perdido, tienes " +vidas+" vidas")
                document.body.style.backgroundColor = "brown";
                break

        }
    }
}
}


random = numero_randon();
console.log(random);
vida = vidas();

adivina_random(random,vida);
