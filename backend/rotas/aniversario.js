const funcioarios = require("../dados.js");

module.exports = function teste(i) {

    const aniversariantes = funcioarios.filter(user => {
        let [day , month , year] = user.nascimento.split("/");
        if (month === i) {
            return user.nome
        }
    })
    return aniversariantes
}


