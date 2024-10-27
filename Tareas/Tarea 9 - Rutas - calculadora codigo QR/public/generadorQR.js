function generarQR() {
    const nombre = document.getElementById("input1").value;
    const correo = document.getElementById("input2").value;
    const institucion = document.getElementById("input3").value;
    const dependencia = document.getElementById("input4").value;

    if (!nombre || !correo || !institucion || !dependencia) {
        alert("Por favor, completa todos los campos.");
        return;
    }

    const datosQR = {
        nombre: nombre,
        correo: correo,
        institucion: institucion,
        dependencia: dependencia
    };

    const datosQRString = JSON.stringify(datosQR);

    $("#qr-code").empty();
    $("#qr-code").qrcode({
        text: datosQRString,
        width: 200, 
        height: 200 
    });
}
