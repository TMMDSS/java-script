var hora = 7
console.log(`agora são exatamente ${hora} horas`)
if (hora >= 7 && hora <= 12) {
    console.log('agora é de manhã')
} else if (hora < 18 && hora > 12) {
    console.log('agora é de tarde')
} else if (hora >= 18) {
    console.log('agora é de noite')
} else if (hora >= 0 && hora < 7) {
    console.log('agora é madrugada')
}