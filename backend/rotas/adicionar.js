const fs = require('fs');

function adicionarNovoFuncionario(req, res) { 
    const data = fs.readFileSync('dados.json');
    const funcioarios = JSON.parse(data);

    const acess = req.body;
    console.log(acess);
    funcioarios.push(acess);

    fs.writeFileSync('dados.json', JSON.stringify(funcioarios));
    res.json(acess)
}

module.exports = adicionarNovoFuncionario;