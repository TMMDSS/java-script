function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector('input#txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[herro] vefifique os dados')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'homem'
            if (idade >= 0 && idade < 10) {
                //criança
            } else if (idade >= 10 && idade < 21 ) {
                //jovem
            } else if (idade > 50) {
                //idoso
            }
        } else if (fsex[1].checked) {
            genero = 'mulher'
            if (fsex[1].checked) {
                genero = 'mulher'
                if (idade >=0 && idade < 10) {
                    //criança
                } else if (idade >= 10 && idade < 21) {
                    //jovem
                } else if (idade > 50) {
                    //idoso
                }
            }
        }      
        res.style.textAlign = 'center'
        res.innerHTML = `detectamos ${genero} com ${idade} anos`
    }
}