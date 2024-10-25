function agregarPantalla(){
    document.getElementById("pantalla").value+=value;
}
function limpiarPantalla(){
    document.getElementById("pantalla").value = "";
}
function calcular(){
    try {
        let valor = eval(document.getElementById("pantalla").value);
        document.getElementById("pantalla").valor = valor;

    } catch (error) {
        document.getElementById("pantalla").valor = "Error :/";
        
        
    }
}