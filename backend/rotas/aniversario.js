const funcioarios = require("../dados.js");

function funcionariosAniversariantes(req, res) {
    const mes = req.query.mes;
    
    function filtrarAniversariantes(mes) {

        if(mes < 1 || mes > 12 || Number.isInteger(mes) === true) {
            return;
        } else {
            const aniversariantes = funcioarios.filter(user => {
                let [day , month , year] = user.nascimento.split("/");
                if (month === mes) {
                    return user.nome;
                }
            });
            return aniversariantes;
        }
    }
    res.json(filtrarAniversariantes(mes));
}

module.exports = funcionariosAniversariantes;