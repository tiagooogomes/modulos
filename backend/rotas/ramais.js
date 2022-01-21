const funcioarios = require("../dados.js");

function funcionariosComRamais(req, res) {

    function ColocarEmOrdemAlfabetica(a, b) {
        return (a.nome > b.nome) ? 1 : ((b.nome > a.nome) ? - 1 : 0);
    }

    function criarNovoVetor(param) {
        const novoJson = {};
        
        novoJson.nome = param.nome;
        novoJson.ramal = param.ramal;

        return novoJson;
    }

    const vetorEmOrdemAlfabetica = funcioarios.sort(ColocarEmOrdemAlfabetica);
    const filtragem = vetorEmOrdemAlfabetica.map(criarNovoVetor);

    res.json(filtragem);
} 

module.exports = funcionariosComRamais;