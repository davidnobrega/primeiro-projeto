const express = require("express")
const { Sequelize, Model, DataTypes } = require("sequelize")
const sequelize = new Sequelize('mariadb://root@localhost:3307/primos', {
    define: {
        timestamps: false
    }
});

const app = express()
app.use(express.json())

const Primos = sequelize.define('Primos', {
    id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true
    },
    nome: DataTypes.STRING,
    idade: DataTypes.BIGINT,
    estadoCivil: DataTypes.STRING
});


app.get("/primos", async (req, res) => {
    const primos = await Primos.findAll();
    res.send(primos)
});

app.get("/primos/:id", async (req, res) => {
    const { id } = req.params
    const primo = await Primos.findOne({
        where: {
            id: id
        }
    })
    res.send(primo)
});

app.post("/primos", async (req, res) => {
    const { nome, idade, estCivil } = req.body
    const primo = await Primos.create({
        nome: nome,
        idade: idade,
        estadoCivil: estCivil,
    });

    res.send(primo)

})






app.listen(2020, () => {
    console.log("Servidor rodando na url http://localhost2020")
})