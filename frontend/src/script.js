const colocarNaTabela = document.getElementById("tabela");
const imputNumber = document.getElementById('numero');
const imputButton = document.getElementById('botao');
const select = document.getElementById('selecao');
const apiUrl = 'http://localhost:3001';

imputButton.addEventListener('click', function funcionabotao() {
    const complemntoUrl = `/ramal`;

    fazerFetchPopularTabela(complemntoUrl, 'Ramal');
});

select.addEventListener('click',  function definirplaceholder() {
    const opcaoSelecionada = select.options[select.selectedIndex].value;
    const complemntoUrl = `/setor?setor=${opcaoSelecionada} `;

    fazerFetchPopularTabela(complemntoUrl, 'Setor');
});

imputNumber.addEventListener("input", function() {
    const oQueFoiPesquisado = imputNumber.value;
    const complemntoUrl = `/aniversario?mes=${oQueFoiPesquisado} `;

    fazerFetchPopularTabela(complemntoUrl, 'Nascimento'); 
});

function fazerFetchPopularTabela(url, chave) {
    const colocarNaTabela = document.getElementById("tabela");

    fetch(apiUrl + url)

    .then(function(resposta){
        const teste = resposta.json();
        return teste
    })

    .then(function(user) {
        colocarNaTabela.innerHTML = "";
        let filtro = "";

        nomearThead(chave);

        user.forEach(element => {
            const linha = document.createElement("tr");
            const imprimirNome = document.createElement("td");
            const imprimirChave = document.createElement("td");

            if(chave === 'Setor') filtro = element.setor;
            if(chave === 'Nascimento') filtro = element.nascimento;
            if(chave === 'Ramal') filtro = element.ramal;

            imprimirNome.appendChild(document.createTextNode(element.nome));
            imprimirChave.appendChild(document.createTextNode(filtro));

            linha.appendChild(imprimirNome);
            linha.appendChild(imprimirChave);

            colocarNaTabela.appendChild(linha);
        });
    });
}

function nomearThead(atributo) {
    const thead = document.getElementById('cabeca');
    thead.innerHTML = "";

    const linha = document.createElement("tr");
    const imprimirNome = document.createElement("th");
    const imprimirAtributo = document.createElement("th");
    
    imprimirNome.appendChild(document.createTextNode("Nome"));
    imprimirAtributo.appendChild(document.createTextNode(atributo));

    linha.appendChild(imprimirNome)
    linha.appendChild(imprimirAtributo); 

    thead.appendChild(linha)
}       







        // fetch(`${apiUrl}/setor?setor=${opcaoSelecionada}`)
        // fetch(apiUrl + i)


        // .then(function(resposta){
        // const teste = resposta.json();
        // return teste
        // })
        // .then(function(user) {
        //     console.log(user)

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



            // fetch(`${apiUrl}/aniversario?mes=${oQueFoiPesquisado}`)

    // .then(function(resposta){
    //     const teste = resposta.json();
    //     return teste
    //     })
    // .then(function(user) {
    //         colocarNaTabela.innerHTML = "";
    //         nomearThead('Nascimento')

    //     user.forEach(element => {
    //         const linha = document.createElement("tr");
    //         const imprimirNome = document.createElement("td");
    //         const imprimirRamal = document.createElement("td");

    //         imprimirNome.appendChild(document.createTextNode(element.nome));
    //         imprimirRamal.appendChild(document.createTextNode(element.nascimento));

    //         linha.appendChild(imprimirNome);
    //         linha.appendChild(imprimirRamal);

    //         colocarNaTabela.appendChild(linha);
    //     });
    // })   


     // fetch(`${apiUrl}/ramal`)

    //     .then(function(resposta){
    //         const teste = resposta.json();
    //         return teste;
    //     })

    //     .then(function(user) {
    //         colocarNaTabela.innerHTML = ""; 
    //         nomearThead('Ramal');

    //         user.forEach(element => {
    //             const linha = document.createElement("tr");
    //             const imprimirNome = document.createElement("td");
    //             const imprimirRamal = document.createElement("td");

    //             imprimirNome.appendChild(document.createTextNode(element.nome));
    //             imprimirRamal.appendChild(document.createTextNode(element.ramal));

    //             linha.appendChild(imprimirNome);
    //             linha.appendChild(imprimirRamal);

    //             colocarNaTabela.appendChild(linha);
    //         });
    //     });