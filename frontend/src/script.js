const apiUrl = 'http://localhost:3001'

const botao = document.getElementById('botao');
const div = document.getElementById('div');
const imputText = document.getElementById('num')

function funcionabotao() {

    const colocarNaTabela = document.getElementById("tabela");
    const cabeca = document.getElementById("cabeca");

    fetch(`${apiUrl}/ramal`)

    .then(function(resposta){
        const teste = resposta.json();
        return teste
    })

    .then(function(user) {
        colocarNaTabela.innerHTML = ""; 




        user.forEach(element => {
            const linha = document.createElement("tr");
            const imprimirNome = document.createElement("td");
            const imprimirRamal = document.createElement("td");

            imprimirNome.appendChild(document.createTextNode(element.nome));
            imprimirRamal.appendChild(document.createTextNode(element.ramal));

            linha.appendChild(imprimirNome);
            linha.appendChild(imprimirRamal);

            colocarNaTabela.appendChild(linha);

        });
        console.log(user)

    });


}

function definirplaceholder() {
        const selecionar = document.getElementById("selecao");
        const opcaoSelecionada = selecionar.options[selecionar.selectedIndex].value;

        console.log(opcaoSelecionada);
        const i = `/setor?setor=${opcaoSelecionada} `;

        receberRespostaPopularTabela(i, 'setor');

        // fetch(`${apiUrl}/setor?setor=${opcaoSelecionada}`)
        // fetch(apiUrl + i)


        // .then(function(resposta){
        // const teste = resposta.json();
        // return teste
        // })
        // .then(function(user) {
        //     console.log(user)

        //     const colocarNaTabela = document.getElementById("tabela");
        //     colocarNaTabela.innerHTML = "";

        //     user.forEach(element => {
        //         const linha = document.createElement("tr");
        //         const imprimirNome = document.createElement("th");
        //         const imprimirRamal = document.createElement("th");

        //         imprimirNome.appendChild(document.createTextNode(element.nome));
        //         imprimirRamal.appendChild(document.createTextNode(element.setor));

        //         linha.appendChild(imprimirNome);
        //         linha.appendChild(imprimirRamal);

        //         colocarNaTabela.appendChild(linha);
        //     });
        // })
};

imputText.addEventListener("input", function() {
    const oQueFoiPesquisado = imputText.value;
    const colocarNaTabela = document.getElementById("tabela");

    fetch(`${apiUrl}/aniversario?mes=${oQueFoiPesquisado}`)

    .then(function(resposta){
        const teste = resposta.json();
        return teste
        })
    .then(function(user) {
            const colocarNaTabela = document.getElementById("tabela");
            colocarNaTabela.innerHTML = "";
        user.forEach(element => {
            const linha = document.createElement("tr");
            const imprimirNome = document.createElement("th");
            const imprimirRamal = document.createElement("th");

            imprimirNome.appendChild(document.createTextNode(element.nome));
            imprimirRamal.appendChild(document.createTextNode(element.nascimento));

            linha.appendChild(imprimirNome);
            linha.appendChild(imprimirRamal);

            colocarNaTabela.appendChild(linha);
        });
    })        
})



function receberRespostaPopularTabela(url, chave) {
    const colocarNaTabela = document.getElementById("tabela");

    fetch(apiUrl + url)

    .then(function(resposta){
        const teste = resposta.json();
        return teste
    })

    .then(function(user) {
        colocarNaTabela.innerHTML = "";

        user.forEach(element => {
            const linha = document.createElement("tr");
            const imprimirNome = document.createElement("th");
            const imprimirChave = document.createElement("th");

            imprimirNome.appendChild(document.createTextNode(element.nome));
            imprimirChave.appendChild(document.createTextNode(`${element}.${chave}`));

            console.log(imprimirChave);
            linha.appendChild(imprimirNome);
            linha.appendChild(imprimirChave);

            colocarNaTabela.appendChild(linha);
        });

    });
};

        // const linha2 = document.createElement("tr");
        // const teste = document.createElement("th");
        // const teste2 = document.createElement("th");

        // teste.appendChild(document.createTextNode("Nome"));
        // teste.appendChild(document.createTextNode("Nome"));

        // linha2.appendChild(teste);
        // cabeca.appendChild(linha2)