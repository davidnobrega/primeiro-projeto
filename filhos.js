const express = require("express")
const app = express()
app.use(express.json())

const filhos = []

app.post("/filhos", (req, res) => {
    filhos.push(req.body)
    res.send(filhos)
})
app.get("/filhos/:nome", (req, res) => {
    const { nome } = req.params
    filhos.forEach(filho => {
        if (filho.nome == nome) {
            res.send(filho)
        }
    })
    res.send("Não encontrado")
})
app.get("/filhos", (req, res) => {
    res.send(filhos)
})
app.listen(8082, function () {
    console.log("Servidor rodando na url http://localhost8082")
})