const showData = (result) => {
    for (let ipData in result) { // Armazenar cada dado do result(data) na variável ipData
        if (document.querySelector('#'+ipData)) { // Verificar no documento se existe algum id campo (ex: '#' + ip)
            let ipResult = document.querySelector('#'+ipData)
            ipResult.innerHTML = result[ipData] // Mostrar o resultado na tela
        }
    }
}

function consultIp() {
    const ip = document.querySelector('.ip')
    let url = `http://api.ipstack.com/${ip.value}?access_key=129a9ba3864f7b909b587660beb6fc68`
    
    const options = {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    }

    fetch(url, options) // Fazer fetch na url (retorna uma promisse)
    .then(response => response.json()) // Transformar a resposta do fetch em json (retorna uma promisse)
        .then(data => { // Dados do response
            showData(data)
        })
    .catch(err => console.log(err)) // Tratar erro
}