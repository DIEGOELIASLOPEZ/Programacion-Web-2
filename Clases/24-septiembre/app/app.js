let frutas = ["manzana", "pera", "sandia"];

/*
frutas.forEach(fruta => console.log(fruta));


frutas.forEach((fruta, index, array) => {
    console.log(index + 1);
    console.log(array);
    console.log(fruta);
});
*/


frutas.forEach((fruta, index, array) => {
    console.log(`Fruta ${index + 1}.- ${fruta}`);
});
