document.querySelector('.btn-enviar').onclick = () => {
    let conteudo = {
        nome: document.querySelector('#nome').value,
        descricao: document.querySelector('#descricao').value
    }
    let headers = new Headers();

    let parametrosAjax = { 
        method: 'POST',
        headers: headers,
        mode: 'cors',
        cache: 'default',
        body: JSON.stringify(conteudo) 
    };
    
    let response = fetch('http://localhost:80', parametrosAjax).then(data => data.text())
    response.then((data) => {
            conteudo = JSON.parse(data)
            console.log(conteudo)
        }
    )
}