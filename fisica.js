jogador1 = false
jogador2 = false
jogador3 = false
jogador4 = false

var pj1 = 0
var pj2 = 0
var pj3 = 0
var pj4 = 0

var del1 = 0
var del2 = 0
var del3 = 0
var del4 = 0

function rodar() {
    var posicao = parseInt(Math.random() * 5)
    if (posicao == 0) {
        posicao = 6
    }
    if (jogador1 == false) {
        document.getElementsByTagName("h1")[del1].innerHTML = ""
        del1 += 1
        console.log(del1)

        pj1 = pj1 + posicao + 1
        document.getElementsByTagName("div")[pj1].innerHTML += `<h1>J1</h1>`

        if (pj1 == 3) {
            alert("Pergnta")
        }

        jogador1 = true
        jogador2 = false
    }
    else if (jogador2 == false) {
        document.getElementsByTagName("h2")[del2].innerHTML = ""
        del2 += 1
        console.log(del2)

        pj2 = pj2 + posicao + 1
        document.getElementsByTagName("div")[pj2].innerHTML += `<h2>J2</h2>`

        if (pj2 == 3) {
            alert("Pergnta")
        }

        jogador2 = true
        jogador3 = false
    }
    else if (jogador3 == false) {
        document.getElementsByTagName("h3")[del3].innerHTML = ""
        del3 += 1
        console.log(del3)

        pj3 = pj3 + posicao + 1
        document.getElementsByTagName("div")[pj3].innerHTML += `<h3>J3</h3>`

        if (pj3 == 3) {
            alert("Pergnta")
        }

        jogador3 = true
        jogador4 = false
    }
    else if (jogador4 == false) {
        document.getElementsByTagName("h4")[del4].innerHTML = ""
        del4 += 1
        console.log(del4)

        pj4 = pj4 + posicao + 1
        document.getElementsByTagName("div")[pj4].innerHTML += `<h4>J4</h4>`

        if (pj4 == 3) {
            alert("Pergnta")
        }

        jogador4 = true
        jogador1 = false
    }

}