function criarCards(data) {
    console.log(data)
    let elementos = ""
    data.forEach((element) => {
        if (element.nome != "" && element.descricao != "") {
            elementos += 
            `
                <div class="card-container">
                    <h4>${element.nome}</h4>
                    <span>${element.descricao}</span>
                </div>
            `
        }
    })
    document.querySelector('#container-apresentar').innerHTML = elementos
}

let abaAtiva = "Apresentar"

document.querySelector('#btn-cadastrar').onclick = () => {
    document.querySelector('#container-cadastrar').classList.remove('d-none')
    document.querySelector('#container-apresentar').classList.add('d-none')

    document.querySelector('#btn-cadastrar').classList.add('btn-aba-ativo')
    document.querySelector('#btn-apresentar').classList.remove('btn-aba-ativo')
}

document.querySelector('#btn-apresentar').onclick = () => {
    getDados()
    document.querySelector('#container-cadastrar').classList.add('d-none')
    document.querySelector('#container-apresentar').classList.remove('d-none')

    document.querySelector('#btn-cadastrar').classList.remove('btn-aba-ativo')
    document.querySelector('#btn-apresentar').classList.add('btn-aba-ativo')
}