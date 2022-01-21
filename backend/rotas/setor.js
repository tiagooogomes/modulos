const funcioarios = require("../dados.js");


module.exports = function filtragemPorSetor(param) {
    const resultado = funcioarios.filter(item => item.setor === param);
    return resultado;
};

