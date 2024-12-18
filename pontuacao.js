function validar() {
    const contTotal = 10;
    let tudoRespondido = true;

    for (let i = 1; i <= contTotal; i++) {
        const opcoes = document.getElementsByName(`pergunta${i}`);
        let respondido = false;

        for (const opcao of opcoes) {
            if (opcao.checked) {
                respondido = true;
                break;
            }
        }

        if (!respondido) {
            tudoRespondido = false;
            alert(`Você não respondeu a pergunta todas as perguntas`);
            break;
        }
    }

    if (tudoRespondido) {
        resul(); 
    }
}


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

    let total = contPoco + contElPrimo + contLeon + contEdgar;

    let percPoco = total > 0 ? ((contPoco / total) * 100).toFixed(2) : 0;
    let percElPrimo = total > 0 ? ((contElPrimo / total) * 100).toFixed(2) : 0;
    let percLeon = total > 0 ? ((contLeon / total) * 100).toFixed(2) : 0;
    let percEdgar = total > 0 ? ((contEdgar / total) * 100).toFixed(2) : 0;


    let resultado = `Edgar = ${percEdgar}<br> Poco = ${percPoco}<br> El Primo = ${percElPrimo}<br> Leon = ${percLeon}`

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


