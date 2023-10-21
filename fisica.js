var jogador = "J1";

var pJ1 = 0;

var pJ2 = 0;

var pJ3 = 0;

var pJ4 = 0;

var pAtual1 = "";

var pAtual2 = "";

var pAtual3 = "";

var pAtual4 = "";

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
        } else if (document.getElementsByTagName("p")[2].innerHTML == jogador) {
            pAtual1 = document.getElementsByTagName("p")[2];
        } else if (document.getElementsByTagName("p")[3].innerHTML == jogador) {
            pAtual1 = document.getElementsByTagName("p")[3];
        } else {
            pAtual1 = document.getElementsByTagName("p")[0];
        }

        pAtual1.remove();

        pJ1 = (pJ1 + resultado) % tabLength;

        document.getElementsByTagName("div")[pJ1 + 1].innerHTML += ` <p class="p-2 text-success">${jogador}</p> `;

        if (document.getElementsByTagName("div")[pJ1 + 1].classList.contains("bg-dark")) {
            document.getElementsByTagName("div")[pJ1 + 1].classList.add("text-light");

            var resposta = prompt("Pergunta");
            if (resposta != "") {
                alert("Acertou!")
            }
        }

        jogador = "J2";
    } else if (jogador == "J2") {
        if (document.getElementsByTagName("p")[1].innerHTML == jogador) {
            pAtual2 = document.getElementsByTagName("p")[1];
        } else if (document.getElementsByTagName("p")[2].innerHTML == jogador) {
            pAtual2 = document.getElementsByTagName("p")[2];
        } else if (document.getElementsByTagName("p")[3].innerHTML == jogador) {
            pAtual2 = document.getElementsByTagName("p")[3];
        } else {
            pAtual2 = document.getElementsByTagName("p")[0];
        }

        pAtual2.remove();

        pJ2 = (pJ2 + resultado) % tabLength;

        document.getElementsByTagName("div")[pJ2 + 1].innerHTML += ` <p class="p-2 text-primary">${jogador}</p> `;

        if (document.getElementsByTagName("div")[pJ2 + 1].classList.contains("bg-dark")) {
            document.getElementsByTagName("div")[pJ2 + 1].classList.add("text-light");

            var resposta = prompt("Pergunta");
            if (resposta != "") {
                alert("Acertou!");
            }
        }

        jogador = "J3";
    }

    else if (jogador == "J3") {
        if (document.getElementsByTagName("p")[1].innerHTML == jogador) {
            pAtual3 = document.getElementsByTagName("p")[1];
        } else if(document.getElementsByTagName("p")[2].innerHTML == jogador) {
            pAtual3 = document.getElementsByTagName("p")[2];
        } else if(document.getElementsByTagName("p")[3].innerHTML == jogador){
            pAtual3 = document.getElementsByTagName("p")[3];
        } else{
            pAtual3 = document.getElementsByTagName("p")[0];
        }

        pAtual3.remove();

        pJ3 = (pJ3 + resultado) % tabLength;

        document.getElementsByTagName("div")[pJ3 + 1].innerHTML += ` <p class="p-2 text-primary">${jogador}</p> `;

        if (document.getElementsByTagName("div")[pJ3 + 1].classList.contains("bg-dark")) {
            document.getElementsByTagName("div")[pJ3 + 1].classList.add("text-light");

            var resposta = prompt("Pergunta");
            if (resposta != "") {
                alert("Acertou!");
            }
        }

        jogador = "J4";
    } else{
        if (document.getElementsByTagName("p")[1].innerHTML == jogador) {
            pAtual4 = document.getElementsByTagName("p")[1];
        } else if(document.getElementsByTagName("p")[2].innerHTML == jogador) {
            pAtual4 = document.getElementsByTagName("p")[2];
        } else if(document.getElementsByTagName("p")[3].innerHTML == jogador){
            pAtual4 = document.getElementsByTagName("p")[3];
        } else{
            pAtual4 = document.getElementsByTagName("p")[0];
        }

        pAtual4.remove();

        pJ4 = (pJ4 + resultado) % tabLength;

        document.getElementsByTagName("div")[pJ4 + 1].innerHTML += ` <p class="p-2 text-primary">${jogador}</p> `;

        if (document.getElementsByTagName("div")[pJ4 + 1].classList.contains("bg-dark")) {
            document.getElementsByTagName("div")[pJ4 + 1].classList.add("text-light");

            var resposta = prompt("Pergunta");
            if (resposta != "") {
                alert("Acertou!");
            }
        }

        jogador = "J1";
    }
}