const funcioarios = require("../dados.js");

function  funcionariosPorSetor(req, res) {
    const setor = req.query.setor;

    if(setor) {
        function filtragemPorSetor(param) {
            const resultado = funcioarios.filter(user => user.setor === param);
            return resultado;
        }
        res.json(filtragemPorSetor(setor));
    } else {
        res.send('Por favor informe o setor que deseja pesquisa na URL. Setores disponiveis: RH, administração, operação, comercial e financeiro. Exemplo: http://localhost:3000/setor?setor=RH');
    }
}

module.exports = funcionariosPorSetor;