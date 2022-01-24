const funcioarios = require("../dados.js");

function  funcionariosPorSetor(req, res) {
    const setor = req.query.setor;

    function filtragemPorSetor(param) {
        const resultado = funcioarios.filter(user => user.setor === param);
        return resultado;
    }
    res.json(filtragemPorSetor(setor));

}

module.exports = funcionariosPorSetor;