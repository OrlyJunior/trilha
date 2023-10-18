var jogador = "J1";

var pJ1 = 0;

var pJ2 = 0;

var pAtual1 = "";

var pAtual2 = "";

document.getElementById("vez").innerHTML = `Vez de: ${jogador}`;

var tabLength = document.querySelectorAll("div").length - 1;

function dado() {
    var resultado = Math.floor(Math.random() * 6);
    if (resultado == 0) {
        resultado = resultado + 1;
    }

    console.log(resultado)

    if (jogador == "J1") {
        if (document.getElementsByTagName("p")[1].innerHTML == jogador) {
            pAtual1 = document.getElementsByTagName("p")[1];
        } else {
            pAtual1 = document.getElementsByTagName("p")[0];
        }

        pAtual1.remove();

        pJ1 = (pJ1 + resultado) % tabLength;

        document.getElementsByTagName("div")[pJ1 + 1].innerHTML += ` <p class="m-2">${jogador}</p> `;

        jogador = "J2";
    } else {
        if (document.getElementsByTagName("p")[1].innerHTML == jogador) {
            pAtual2 = document.getElementsByTagName("p")[1];
        } else {
            pAtual2 = document.getElementsByTagName("p")[0];
        }

        pAtual2.remove();

        pJ2 = (pJ2 + resultado) % tabLength;

        document.getElementsByTagName("div")[pJ2 + 1].innerHTML += ` <p class="m-2">${jogador}</p> `;

        jogador = "J1";
    }

    console.log(document.getElementsByTagName("p")[pJ1 + 1]);
}