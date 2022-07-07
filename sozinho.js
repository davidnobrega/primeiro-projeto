const express = require("express")
const app = express()

app.use(express.json())

const arrayFuncionario = [];

app.post("/funcionario", (req, res) => {

    const { body } = req;
    arrayFuncionario.push(req.body);

    res.send(arrayFuncionario)
})

app.get("/funcionario/:id", (req, res) => {
    const { id } = req.params;
    let funcionario = arrayFuncionario[parseInt(id, 10) - 1];

    if (!funcionario) {
        funcionario = "Não existe esse funcionario"
    }
    res.send(funcionario)
})
app.get("/funcionarios", (req, res) => {
    res.send(arrayFuncionario)
})














app.listen(8082, function () {
    console.log("Servidor rodando na url http://localhost8082")
})