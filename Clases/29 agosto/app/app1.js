let opcion = prompt('Elija una opicion:\n1. Lbros\n2. Peliculas\n3. Juegos0');

switch(opcion){
    case '1':
        console.log("El principito");
        break;
    case '2':
        console.log("Matrix");
        break;
    case '3':
        console.log("Cyberpunk");
        break;

    default:
        console.log("Que?")
}