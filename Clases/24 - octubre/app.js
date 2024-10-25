const express = ("express");
const path = require("path");
const pageRutas = require("./routes/pages");

const app = express();
const port = 3059;

app.use(express.static("public"));

app.use('/'.pageRutas);
app.get('/', (req,res)=>{
    res.redirect('/page1');
});

app.listen(port,()=>{
    console.log('Escuchando')
});
