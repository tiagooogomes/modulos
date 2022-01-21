const funcioarios = require("../dados.js");

function funcionariosAniversariantes(req, res) {
    const mes = req.query.mes;
    
    if(mes){
        function filtrarAniversariantes(mes) {

            if(mes < 1 || mes > 12 || Number.isInteger(mes) === true) {
                return "Por favor informe um número inteiro entre 1 e 12";
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
    } else {
        res.send('Por favor informe o mes de 1 a 12 que deseja pesquisa na URL. Exemplo: http://localhost:3000/aniversario?mes=05');
    }
}

module.exports = funcionariosAniversariantes;