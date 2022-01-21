const funcioarios = require("../dados.js");

function sortUsers(x, y){
    if (x.nome < y.nome) {return -1;}
    if (x.nome > y.nome) {return 1;}
    return 0;
}
const aniver = funcioarios.sort(sortUsers);

module.exports = aniver;