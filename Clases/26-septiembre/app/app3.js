//Funcion declarativa
function numeroAleatorio(min,max){
    return Math.floor(Math.random() * (min,max)+min)
}

//Funcion expresada en una variable
let calculaAleatorio = function numeroAleatorios(min,max){
    return  Math.floor(Math.random() * (min,max)+min)
}

//Funcion Flecha
let numero = (max,min)=>Math.floor(Math.random() * (min,max)+min);

console.log(numero(15))
