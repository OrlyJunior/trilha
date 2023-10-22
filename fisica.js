jogador1 = false
jogador2 = false
jogador3 = false
jogador4 = false

var pj1 = 0
var pj2 = 0
var pj3 = 0
var pj4 = 0

function rodar() {
    var posicao = parseInt(Math.random() * 6)
    if (posicao == 0) {
        posicao = 6
    }
    if (jogador1 == false) {
        if (pj1 == 0) {
            document.getElementsByTagName("div")[pj1 + 2].innerHTML = ""
            pj1 = 2
        }
        document.getElementsByTagName("div")[pj1].innerHTML = ""
        pj1 = pj1 + posicao + 1
        document.getElementsByTagName("div")[pj1].innerHTML += `<p>J1</p>`
        jogador1 = true
        jogador2 = false
        console.log(posicao)
        console.log(pj1)
    }
    else if (jogador2 == false) {
        if (pj2 == 0) {
            document.getElementsByTagName("div")[pj2 + 2].innerHTML = ""
            pj2 = 2
        }
        document.getElementsByTagName("div")[pj2].innerHTML = ""
        pj2 = pj2 + posicao + 1
        document.getElementsByTagName("div")[pj2].innerHTML += `<p>J2</p>`
        jogador2 = true
        jogador3 = false
    }
    else if (jogador3 == false) {
        if (pj3 == 0) {
            document.getElementsByTagName("div")[pj3 + 2].innerHTML = ""
            pj3 = 2
        }
        document.getElementsByTagName("div")[pj3].innerHTML = ""
        pj3 = pj3 + posicao + 1
        document.getElementsByTagName("div")[pj3].innerHTML += `<p>J3</p>`
        jogador3 = true
        jogador4 = false
    }
    else if (jogador4 == false) {
        if (pj4 == 0) {
            document.getElementsByTagName("div")[pj4 + 2].innerHTML = ""
            pj4 = 2
        }
        document.getElementsByTagName("div")[pj4].innerHTML = ""
        pj4 = pj4 + posicao + 1
        document.getElementsByTagName("div")[pj4].innerHTML += `<p>J4</p>`
        jogador4 = true
        jogador1 = false
    }

}