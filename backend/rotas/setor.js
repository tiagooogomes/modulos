const fs = require('fs');

function  funcionariosPorSetor(req, res) {
    const data = fs.readFileSync('dados.json');
    const funcioarios = JSON.parse(data);
    
    const setor = req.query.setor;

    function filtragemPorSetor(param) {
        const resultado = funcioarios.filter(user => user.setor === param);
        return resultado;
    }
    res.json(filtragemPorSetor(setor));
}

module.exports = funcionariosPorSetor;