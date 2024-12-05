function resul () {

    let contEdgar = 0
    let contPoco = 0 
    let contElPrimo = 0
    let contLeon = 0 

    let radios = document.querySelectorAll('input[type=radio]')

    radios.forEach(e => {
        if (e.checked) {
            if (e.value == 'edgar') {
                contEdgar ++
            } else if (e.value == 'poco') {
                contPoco ++ 
            } else if (e.value == 'elPrimo') {
                contElPrimo ++
            } else if (e.value == 'leon') {
                contLeon ++
            }
        }    
    })

    let resultado = `Edgar = ${contEdgar}<br> Poco = ${contPoco}<br> El Primo = ${contElPrimo}<br> Leon = ${contLeon}`

    document.getElementById('resultado').innerHTML = resultado

    localStorage.setItem('edgar', contEdgar)
    localStorage.setItem('poco', contPoco)
    localStorage.setItem('elPrimo', contElPrimo)
    localStorage.setItem('leon', contLeon)

    let maior = 0 
    let pagina 
    if (contEdgar > maior) {
        maior = contEdgar
        pagina = 'edgar'
    }
    if (contPoco > maior) {
        maior = contPoco
        pagina = 'poco'
    }
    if (contElPrimo > maior) {
        maior = contElPrimo
        pagina = 'elPrimo'
    }
    if (contLeon > maior) {
        maior = contLeon
        pagina = 'leon'
    }

    setTimeout(() => {
        window.open(pagina + '.html')
    }, 5000)

}


