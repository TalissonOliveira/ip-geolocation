function consultarIp() {
    const ip = document.querySelector('#ip')
    let url = `http://api.ipstack.com/${ip.value}?access_key=129a9ba3864f7b909b587660beb6fc68`
    
    const options = {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    }

    fetch(url, options)
    .then(response => response.json())
        .then(data => {
            console.log(data)
            let ip = document.querySelector('td#ip')
            ip.innerHTML = data.ip

            let country = document.querySelector('td#country_name')
            country.innerHTML = data.country_name

            let region = document.querySelector('td#region_name')
            region.innerHTML = data.region_name

            let city = document.querySelector('td#city')
            city.innerHTML = data.city

            let zip = document.querySelector('td#zip')
            zip.innerHTML = data.zip

            let latitude = document.querySelector('td#latitude')
            latitude.innerHTML = data.latitude

            let longitude = document.querySelector('td#longitude')
            longitude.innerHTML = data.longitude
        })
    .catch(err => console.log(err))
}