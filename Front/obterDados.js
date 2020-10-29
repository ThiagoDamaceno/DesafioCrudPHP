//Chama a função de obter os dados da api quando carrega a página
getDados()

function getDados() {
    let headers = new Headers();

    let parametrosAjax = { 
        method: 'GET',
        headers: headers,
        mode: 'cors',
        cache: 'default' 
    };

    let response = fetch('http://localhost:80', parametrosAjax).then(data => data.text())
    response.then(data => criarCards(JSON.parse(data)))
}

