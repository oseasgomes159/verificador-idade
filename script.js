function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERROR] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        res.innerHTML = `Idade Calculada: ${idade}`
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 13){
                //CRIANCA
                img.src = 'imagens/crianca-mas.png'
                document.body.style.background = '#d09502'
            } else if (idade < 21) {
                //JOVEM
                img.src = 'imagens/jovem-mas.png'
                document.body.style.background = '#e0585f'
            } else if (idade < 50) {
                //ADULTO
                img.src = 'imagens/adulto-mas.png'
                document.body.style.background = '#404d45'
            } else {
                //IDOSO
                img.src = 'imagens/idoso-mas.png'
                document.body.style.background = '#3b627b'
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 13) {
                //CRIANCA
                img.src = 'imagens/crianca-fem.png'
                document.body.style.background = '#d48c8c'
            } else if (idade < 21) {
                //JOVEM
                img.src = 'imagens/jovem-fem.png'
                document.body.style.background = '#83a5c8'
            } else if (idade < 50) {
                //ADULTO
                img.src = 'imagens/adulto-fem.png'
                document.body.style.background = '#a58407'
            } else {
                //IDOSO
                img.src = 'imagens/idoso-fem.png'
                document.body.style.background = '#c83652'
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}