const colocarNaTabela = document.getElementById("tabela");
const novoSetor = document.getElementById('novo-setor')
const imputNumber = document.getElementById('numero');
const imputButton = document.getElementById('botao');
const buttom = document.getElementById('submeter');
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

buttom.addEventListener('click', function submeterFormulario() {

    const nascimento = new Date(document.getElementById('nascimento').value).toLocaleDateString('pt-BR');
    const matricula = document.getElementById('matricula').value;
    const ramal = document.getElementById('ramal').value;
    const setor = novoSetor.options[novoSetor.selectedIndex].value;
    const email = document.getElementById('email').value;
    const nome = document.getElementById('nome').value;
   
    console.log(nascimento);

    fetch(apiUrl + '/adicionar', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            "matricula": matricula,
            "nome": nome,
            "ramal": ramal,
            "setor": setor,
            "nascimento": nascimento,
            "email": email
        })
    })

        .then(function(resposta){
            const teste = resposta.json();
            return teste;
        })

        .then(function(data) {
            console.log(data)
        });
});

function fazerFetchPopularTabela(url, chave) {
    const colocarNaTabela = document.getElementById("tabela");
    const mapa = {
        'Ramal': 'ramal',
        'Setor': 'setor',
        'Nascimento': 'nascimento'
    }

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

            filtro = element[mapa[chave]];

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

    linha.appendChild(imprimirNome);
    linha.appendChild(imprimirAtributo); 

    thead.appendChild(linha);
}       
