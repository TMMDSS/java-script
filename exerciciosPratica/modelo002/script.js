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
                img.setAttribute('src', 'criança-mas.jpg')
            } else if (idade < 21 ) {
                //jovem
                img.setAttribute('src', 'jovem-mas.jpg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'adulto-mas.jpg')

            } else {
                //idoso
                img.setAttribute('src', 'idoso-mas.jpg')
            }
        } else if (fsex[1].checked) {
            genero = 'mulher'
            if (fsex[1].checked) {
                genero = 'mulher'
                if (idade >=0 && idade < 10) {
                    //criança
                    img.setAttribute('src', 'criança-fem')
                } else if (idade < 21) {
                    //jovem
                    img.setAttribute('jovem-fem.jpg')
                } else if (idade < 50) {
                    //adulto
                    img.setAttribute('src', 'adulto-fem.jpg')
                }else if (idade > 50){
                    //idoso
                    img.setAttribute('src', 'idoso-fem.jpg')
                }
            }
        }      
        res.style.textAlign = 'center'
        res.innerHTML = `detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}