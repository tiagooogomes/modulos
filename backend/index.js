const funcionariosAniversariantes = require("./rotas/aniversario.js");
const adicionarNovoFuncionario = require("./rotas/adicionar.js");
const funcionariosComRamais = require("./rotas/ramais.js");
const funcionariosPorSetor = require("./rotas/setor.js");
const express = require("express");
const cors = require("cors");
const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

app.post('/adicionar', adicionarNovoFuncionario);
app.get('/setor', funcionariosPorSetor);
app.get('/aniversario', funcionariosAniversariantes);
app.get('/ramal', funcionariosComRamais);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
