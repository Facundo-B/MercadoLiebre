const express = require('express');
const app = express();
const path = require('path');

app.use( express.static(path.resolve(__dirname, './public')) );

app.listen(8080, ()=> console.log("Todo ready."));

/*Routes*/
app.get("/", (req, res) =>{
    res.sendFile(path.resolve(__dirname, "./views/home.html"))
})

app.get("/register", (req, res) =>{
    res.sendFile(path.resolve(__dirname, "./views/register.html"))
})

app.post("/register", (req, res) =>{
    res.send("Registrado papu")
})

app.get("/login", (req, res) =>{
    res.sendFile(path.resolve(__dirname, "./views/login.html"))
})

app.post("/login", (req, res) =>{
    res.sendFile(path.resolve(__dirname, "./views/home.html"))
})