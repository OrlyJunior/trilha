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

function correto() {
    document.getElementById("pergunta").remove();

    document.body.insertAdjacentHTML("beforeend", `<div id="janela" style="height: 40%" class="pergunta">
                                                            <p class="perguntaTitulo bg-light w-100 p-3 text-center">Você acertou!</p>
                                                            <p style="display: flex; position: absolute; top: 35%;">Você ganhou um poder!</p>

                                                            <button onclick="continuar()" style="border-radius: 12px; position: absolute; top: 55%;">Continuar</button>
                                                        </div>`);
}

function continuar() {
    document.getElementById("janela").remove();
}

function errado() {
    document.getElementById("pergunta").remove();

    document.body.insertAdjacentHTML("beforeend", `<div id="janela" style="height: 40%" class="pergunta">
                                                            <p class="perguntaTitulo bg-light w-100 p-3 text-center">Você errou!</p>
                                                            <p style="display: flex; position: absolute; top: 35%;">Você perdeu a chance de ganhar um poder!</p>

                                                            <button onclick="continuar()" style="border-radius: 12px; position: absolute; top: 55%;">Continuar</button>
                                                        </div>`);
}


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
            document.body.insertAdjacentHTML("beforeend", `<div id="pergunta" class="pergunta">
                                                            <p class="w-100 p-3 bg-primary text-center perguntaTitulo">Pergunta para o jogador ${jogador}</p>
                                                    
                                                            <p style="position: absolute; top: 12%; font-weight: 750; word-break: break-all;" class="m-2">Texto da Pergunta</p>
                                                    
                                                            <p style="position: absolute; top: 38%; left: 4%; font-weight: 750;">Alternativa 1</p>
                                                            <p style="position: absolute; top: 48%; left: 4%; font-weight: 750;">Alternativa 2</p>
                                                            <p style="position: absolute; top: 58%; left: 4%; font-weight: 750;">Alternativa 3</p>
                                                    
                                                            <button onclick="correto()" style="position: absolute; border-radius: 50px; width: 10%; left: 15%; top: 75%;">A</button>
                                                            <button onclick="errado()" style="position: absolute; border-radius: 30px; width: 10%;  left: 45%; top: 75%;">B</button>
                                                            <button onclick="errado()" style="position: absolute; border-radius: 30px; width: 10%; left: 75%; top: 75%;">C</button>
                                                        </div>`);

            document.getElementById("jogar").setAttribute("disabled");
        }

        jogador = "J2";

        document.getElementById("vez").innerHTML = `Vez de: ${jogador}`;
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
            document.body.insertAdjacentHTML("beforeend", `<div id="pergunta" class="pergunta">
                                                            <p class="w-100 p-3 bg-primary text-center perguntaTitulo">Pergunta para o jogador ${jogador}</p>
                                                    
                                                            <p style="position: absolute; top: 12%; font-weight: 750; word-break: break-all;" class="m-2">Texto da Pergunta</p>
                                                    
                                                            <p style="position: absolute; top: 38%; left: 4%; font-weight: 750;">Alternativa 1</p>
                                                            <p style="position: absolute; top: 48%; left: 4%; font-weight: 750;">Alternativa 2</p>
                                                            <p style="position: absolute; top: 58%; left: 4%; font-weight: 750;">Alternativa 3</p>
                                                    
                                                            <button onclick="correto()" style="position: absolute; border-radius: 50px; width: 10%; left: 15%; top: 75%;">A</button>
                                                            <button onclick="errado()" style="position: absolute; border-radius: 30px; width: 10%;  left: 45%; top: 75%;">B</button>
                                                            <button onclick="errado()" style="position: absolute; border-radius: 30px; width: 10%; left: 75%; top: 75%;">C</button>
                                                        </div>`);

            document.getElementById("jogar").setAttribute("disabled");
        }

        jogador = "J3";

        document.getElementById("vez").innerHTML = `Vez de: ${jogador}`;
    }

    else if (jogador == "J3") {
        if (document.getElementsByTagName("p")[1].innerHTML == jogador) {
            pAtual3 = document.getElementsByTagName("p")[1];
        } else if (document.getElementsByTagName("p")[2].innerHTML == jogador) {
            pAtual3 = document.getElementsByTagName("p")[2];
        } else if (document.getElementsByTagName("p")[3].innerHTML == jogador) {
            pAtual3 = document.getElementsByTagName("p")[3];
        } else {
            pAtual3 = document.getElementsByTagName("p")[0];
        }

        pAtual3.remove();

        pJ3 = (pJ3 + resultado) % tabLength;

        document.getElementsByTagName("div")[pJ3 + 1].innerHTML += ` <p class="p-2 text-danger">${jogador}</p> `;

        if (document.getElementsByTagName("div")[pJ3 + 1].classList.contains("bg-dark")) {
            document.body.insertAdjacentHTML("beforeend", `<div id="pergunta" class="pergunta">
                                                            <p class="w-100 p-3 bg-primary text-center perguntaTitulo">Pergunta para o jogador ${jogador}</p>
                                                    
                                                            <p style="position: absolute; top: 12%; font-weight: 750; word-break: break-all;" class="m-2">Texto da Pergunta</p>
                                                    
                                                            <p style="position: absolute; top: 38%; left: 4%; font-weight: 750;">Alternativa 1</p>
                                                            <p style="position: absolute; top: 48%; left: 4%; font-weight: 750;">Alternativa 2</p>
                                                            <p style="position: absolute; top: 58%; left: 4%; font-weight: 750;">Alternativa 3</p>
                                                    
                                                            <button onclick="correto()" style="position: absolute; border-radius: 50px; width: 10%; left: 15%; top: 75%;">A</button>
                                                            <button onclick="errado()" style="position: absolute; border-radius: 30px; width: 10%;  left: 45%; top: 75%;">B</button>
                                                            <button onclick="errado()" style="position: absolute; border-radius: 30px; width: 10%; left: 75%; top: 75%;">C</button>
                                                        </div>`);

            document.getElementById("jogar").setAttribute("disabled");
        }

        jogador = "J4";

        document.getElementById("vez").innerHTML = `Vez de: ${jogador}`;
    } else {
        if (document.getElementsByTagName("p")[1].innerHTML == jogador) {
            pAtual4 = document.getElementsByTagName("p")[1];
        } else if (document.getElementsByTagName("p")[2].innerHTML == jogador) {
            pAtual4 = document.getElementsByTagName("p")[2];
        } else if (document.getElementsByTagName("p")[3].innerHTML == jogador) {
            pAtual4 = document.getElementsByTagName("p")[3];
        } else {
            pAtual4 = document.getElementsByTagName("p")[0];
        }

        pAtual4.remove();

        pJ4 = (pJ4 + resultado) % tabLength;

        document.getElementsByTagName("div")[pJ4 + 1].innerHTML += ` <p class="p-2 text-dark">${jogador}</p> `;

        if (document.getElementsByTagName("div")[pJ4 + 1].classList.contains("bg-dark")) {
            document.body.insertAdjacentHTML("beforeend", `<div id="pergunta" class="pergunta">
                                                            <p class="w-100 p-3 bg-primary text-center perguntaTitulo">Pergunta para o jogador ${jogador}</p>
                                                    
                                                            <p style="position: absolute; top: 12%; font-weight: 750; word-break: break-all;" class="m-2">Texto da Pergunta</p>
                                                    
                                                            <p style="position: absolute; top: 38%; left: 4%; font-weight: 750;">Alternativa 1</p>
                                                            <p style="position: absolute; top: 48%; left: 4%; font-weight: 750;">Alternativa 2</p>
                                                            <p style="position: absolute; top: 58%; left: 4%; font-weight: 750;">Alternativa 3</p>
                                                    
                                                            <button onclick="correto()" style="position: absolute; border-radius: 50px; width: 10%; left: 15%; top: 75%;">A</button>
                                                            <button onclick="errado()" style="position: absolute; border-radius: 30px; width: 10%;  left: 45%; top: 75%;">B</button>
                                                            <button onclick="errado()" style="position: absolute; border-radius: 30px; width: 10%; left: 75%; top: 75%;">C</button>
                                                        </div>`);

            document.getElementById("jogar").setAttribute("disabled");
        }

        jogador = "J1";

        document.getElementById("vez").innerHTML = `Vez de: ${jogador}`;


    }
}