// Function para definir o tema
function setTheme (themeName) {
    localStorage.setItem('theme', themeName) //Salvar informação no localStorage(chave, valor)
    document.documentElement.className = themeName
}

// Function para trocar entre tema light e dark
function toggleTheme() {
    if (localStorage.getItem('theme') === 'theme-dark') {
        setTheme('theme-light')
    } else {
        setTheme('theme-dark')
    }
}

// Function auto executável (IIFE) para definir o tema no carregamento inicial
(function () {
    if (localStorage.getItem('theme') === 'theme-dark') {
        setTheme('theme-dark')
        document.querySelector('#checkbox').checked = true
    } else {
        setTheme('theme-light')
    }
}) ()