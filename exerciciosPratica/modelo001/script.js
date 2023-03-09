function carregar(){
var msg = document.querySelector('#msg')
var img = document.querySelector('#imagem')
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `Agora são ${hora} Horas`
if (hora >= 0 && hora < 18) {
    img
}
}