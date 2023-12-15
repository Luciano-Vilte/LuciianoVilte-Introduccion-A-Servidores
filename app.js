const express = require('express')
const path = require("path")
const app = express()

const port = 3030

const createpath = (filename) => path.join(__dirname, `./views/${filename}.html`)

//Configuraciones
app.use(express.static("public"))


//Rutas
app.get("/", (req,res) => {
    res.sendFile(createpath("index"))
})

app.get("/babbage", (req,res) => {
    res.sendFile(createpath("babbage"))
})

app.get("/berners-lee", (req,res) => {
    res.sendFile(createpath("berners-lee"))
})
app.get("/clarke", (req, res) => {
    res.sendFile(createpath("clarke"))
})
app.get("/hamilton", (req, res) => {
    res.sendFile(createpath("hamilton"))
})
app.get("/hopper", (req, res) => {
    res.sendFile(createpath("hopper"))
})
app.get("/lovelace", (req, res) => {
    res.sendFile(createpath("lovelace"))
})
app.get("/turing", (req, res) => {
    res.sendFile(createpath("turing"))
})

//Servidor ON
app.listen(port, () => console.log(`http://localhost:${port}`))