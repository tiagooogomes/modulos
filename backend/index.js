const funcionariosAniversariantes = require("./rotas/aniversario.js");
const funcionariosComRamais = require("./rotas/ramais.js");
const funcionariosPorSetor = require("./rotas/setor.js");
const express = require("express");
const app = express();
const port = 3000;

app.get('/setor', funcionariosPorSetor);
app.get('/aniversario', funcionariosAniversariantes);
app.get('/ramal', funcionariosComRamais);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
