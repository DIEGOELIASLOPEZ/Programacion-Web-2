const express = require("express");
const path = require("path");
const app = express();
app.use(express.static(path.join(__dirname, "../styles")));
app.get("/", (req, res) => {
    res.redirect("/index"); 
});
app.get("/index", (req, res) => {
    res.sendFile(path.join(__dirname, "../html/bienvenida.html"));
});
app.get("/quienes-somos", (req, res) => {
    res.sendFile(path.join(__dirname, "../html/quienes-somos.html"));
});

app.get("/contacto", (req, res) => {
    res.sendFile(path.join(__dirname, "../html/contacto.html"));
});

app.listen(3010, () => {
    console.log("Servidor Encendido en el puerto 3010");
});
