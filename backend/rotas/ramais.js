const fs = require('fs');



function funcionariosComRamais(req, res) {

    const data = fs.readFileSync('dados.json');
    const funcioarios = JSON.parse(data);

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