const express = require("express");
const teste = require("./rotas/aniversario.js");
const aniver = require("./rotas/ramais.js");
const filtragemPorSetor = require("./rotas/setor.js");

const app = express();
const port = 3000;


app.get('/setor', (req, res) => {

    const setor = req.query.setor;
    res.send(filtragemPorSetor(setor));
})

app.get('/aniversario', (req, res) => {

    const i = req.query.i;
    res.send(teste(i));
})

app.get('/ramal', (req, res) => res.send(aniver))






app.listen(port, () => console.log(`Example app listening on port ${port}!`));
