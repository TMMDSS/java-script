function carregar(){
var msg = document.querySelector('#msg')
var img = document.querySelector('#imagem')
var data = new Date()
var hora = data.getHours()

msg.innerHTML = `Agora são ${hora} Horas`
if (hora >= 0 && hora < 12) {
        //BOM DIA
        img.src = 'manha.png'
        document.body.style.background = '#62a8a8'
    } else if (hora >= 12 & hora <= 18) {
        //boa tarde
        img.src = 'tarde.png'
        document.body.style.background = '#FBC28D'
    } else {
        //boa noite
        img.src = 'noite.png'
        document.body.style.background = '#33282E'
    }
}