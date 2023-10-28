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

var tabLength = document.querySelectorAll("div").length - 2;

console.log(document.getElementById("final").innerHTML == ` <p class="p-2 text-warning w-50">J4</p> `) 

function correto() {
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

        pJ1 = (pJ1 + 2) % tabLength;

        document.getElementsByTagName("div")[pJ1 + 1].innerHTML += ` <p class="p-2 text-success">${jogador}</p> `;

        jogador = "J2";

        document.getElementById("vez").innerHTML = `Vez de: ${jogador}`;

        document.getElementById("pergunta").remove();

        document.getElementById("jogar").disabled = false;

        return;
    }

    if (jogador == "J2") {
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

        pJ2 = (pJ2 + 2) % tabLength;

        document.getElementsByTagName("div")[pJ2 + 1].innerHTML += ` <p class="p-2 text-primary">${jogador}</p> `;

        jogador = "J3";

        document.getElementById("vez").innerHTML = `Vez de: ${jogador}`;

        document.getElementById("pergunta").remove();

        document.getElementById("jogar").disabled = false;

        return;
    }

    if (jogador == "J3") {
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

        pJ3 = (pJ2 + 3) % tabLength;

        document.getElementsByTagName("div")[pJ3 + 1].innerHTML += ` <p class="p-2 text-danger">${jogador}</p> `;

        jogador = "J4";

        document.getElementById("vez").innerHTML = `Vez de: ${jogador}`;

        document.getElementById("pergunta").remove();

        document.getElementById("jogar").disabled = false;

        return;
    }

    if (jogador == "J4") {
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

        pJ4 = (pJ4 + 2) % tabLength;

        document.getElementsByTagName("div")[pJ4 + 1].innerHTML += ` <p class="p-2 text-warning">${jogador}</p> `;

        jogador = "J1";

        document.getElementById("vez").innerHTML = `Vez de: ${jogador}`;

        document.getElementById("pergunta").remove();

        document.getElementById("jogar").disabled = false;

        return;
    }
}

function dado() {
    var resultado = Math.floor(Math.random() * 6);

    if (document.getElementsByTagName("div")[40].innerHTML == ` <p class="text-success p-2 w-50">J1</p>` ) {
        if(resultado > 1){
            resultado = 1;
        }
    }

    if (document.getElementsByTagName("div")[39].innerHTML == ` <p class="text-success p-2 w-50">J1</p> `) {
        if(resultado > 2){
            resultado = 2;
        }
    }

    if (document.getElementsByTagName("div")[38].innerHTML == ` <p class="text-success p-2 w-50">J1</p> `) {
        if(resultado > 3){
            resultado = 3;
        }
    }

    if (document.getElementsByTagName("div")[37].innerHTML == ` <p class="text-success p-2 w-50">J1</p> `) {
        if(resultado > 4){
            resultado = 4;
        }
    }

    if (document.getElementsByTagName("div")[36].innerHTML == ` <p class="text-success p-2 w-50">J1</p> `) {
        if(resultado > 5){
            resultado = 5;
        }
    }

    if (document.getElementsByTagName("div")[40].innerHTML == ` <p class="p-2 text-primary w-50">J2</p> `) {
        if(resultado > 1){
            resultado = 1;
        }
    }

    if (document.getElementsByTagName("div")[39].innerHTML == ` <p class="p-2 text-primary w-50">J2</p> `) {
        if(resultado > 2){
            resultado = 2;
        }
    }

    if (document.getElementsByTagName("div")[38].innerHTML == ` <p class="p-2 text-primary w-50">J2</p> `) {
        if(resultado > 3){
            resultado = 3;
        }
    }

    if (document.getElementsByTagName("div")[37].innerHTML == ` <p class="p-2 text-primary w-50">J2</p> `) {
        if(resultado > 4){
            resultado = 4;
        }
    }

    if (document.getElementsByTagName("div")[36].innerHTML == ` <p class="p-2 text-primary w-50">J2</p> `) {
        if(resultado > 5){
            resultado = 5;
        }
    }

    if (document.getElementsByTagName("div")[40].innerHTML == ` <p class="p-2 text-danger w-50">J3</p> `) {
        if(resultado > 1){
            resultado = 1;
        }
    }

    if (document.getElementsByTagName("div")[39].innerHTML == ` <p class="p-2 text-danger w-50">J3</p> `) {
        if(resultado > 2){
            resultado = 2;
        }
    }

    if (document.getElementsByTagName("div")[38].innerHTML == ` <p class="p-2 text-danger w-50">J3</p> `) {
        if(resultado > 3){
            resultado = 3;
        }
    }

    if (document.getElementsByTagName("div")[37].innerHTML == ` <p class="p-2 text-danger w-50">J3</p> `) {
        if(resultado > 4){
            resultado = 4;
        }
    }

    if (document.getElementsByTagName("div")[36].innerHTML == ` <p class="p-2 text-danger w-50">J3</p> `) {
        if(resultado > 5){
            resultado = 5;
        }
    }

    if (document.getElementsByTagName("div")[40].innerHTML == ` <p class="p-2 text-warning w-50">J4</p>`) {
        if(resultado > 1){
            resultado = 1;
        }
    }

    if (document.getElementsByTagName("div")[39].innerHTML == ` <p class="p-2 text-warning w-50">J4</p> `) {
        if(resultado > 2){
            resultado = 2;
        }
    }

    if (document.getElementsByTagName("div")[38].innerHTML == ` <p class="p-2 text-warning w-50">J4</p> `) {
        if(resultado > 3){
            resultado = 3;
        }
    }

    if (document.getElementsByTagName("div")[37].innerHTML == ` <p class="p-2 text-warning w-50">J4</p> `) {
        if(resultado > 4){
            resultado = 4;
        }
    }

    if (document.getElementsByTagName("div")[36].innerHTML == ` <p class="p-2 text-warning w-50">J4</p> `) {
        if(resultado > 5){
            resultado = 5;
        }
    }

    if (resultado == 0) {
        resultado = resultado + 1;
    }

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

        document.getElementsByTagName("div")[pJ1 + 1].innerHTML += ` <p class="text-success p-2 w-50">J1</p> `;

        if (document.getElementsByTagName("div")[pJ1 + 1].classList.contains("bg-dark")) {
            document.getElementById("jogar").disabled = true;

            document.body.insertAdjacentHTML("beforeend", `<div id="pergunta" class="pergunta">
                                                            <p class="w-100 p-3 bg-primary text-center perguntaTitulo">Pergunta para o jogador J1</p>
                                                    
                                                            <p style="position: absolute; top: 12%; font-weight: 750; word-break: break-all;" class="m-2">Texto da Pergunta</p>
                                                    
                                                            <p style="position: absolute; top: 38%; left: 4%; font-weight: 750;">Alternativa 1</p>
                                                            <p style="position: absolute; top: 48%; left: 4%; font-weight: 750;">Alternativa 2</p>
                                                            <p style="position: absolute; top: 58%; left: 4%; font-weight: 750;">Alternativa 3</p>
                                                    
                                                            <button onclick="correto()" style="position: absolute; border-radius: 50px; width: 10%; left: 15%; top: 75%;">A</button>
                                                            <button onclick="errado()" style="position: absolute; border-radius: 30px; width: 10%;  left: 45%; top: 75%;">B</button>
                                                            <button onclick="errado()" style="position: absolute; border-radius: 30px; width: 10%; left: 75%; top: 75%;">C</button>
                                                        </div>`);

            return;
        }

        if (document.getElementById("final").innerHTML == ` <p class="text-success p-2 w-50">J1</p> `) {
            document.body.insertAdjacentHTML("beforeend", `    <div style="top: 44%; height: 8.5%; border-radius: 12px;" class="pergunta">
            <p style="border-radius: 12px;" class="w-100 p-3 bg-primary text-center">O vencedor é o jogador ${jogador}</p>
       </div>`);

            document.getElementById("jogar").disabled = true;

            return;
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

        document.getElementsByTagName("div")[pJ2 + 1].innerHTML += ` <p class="p-2 text-primary w-50">J2</p> `;

        if (document.getElementsByTagName("div")[pJ2 + 1].classList.contains("bg-dark")) {
            document.getElementById("jogar").disabled = true;

            document.body.insertAdjacentHTML("beforeend", `<div id="pergunta" class="pergunta">
                                                            <p class="w-100 p-3 bg-primary text-center perguntaTitulo">Pergunta para o jogador J2</p>
                                                    
                                                            <p style="position: absolute; top: 12%; font-weight: 750; word-break: break-all;" class="m-2">Texto da Pergunta</p>
                                                    
                                                            <p style="position: absolute; top: 38%; left: 4%; font-weight: 750;">Alternativa 1</p>
                                                            <p style="position: absolute; top: 48%; left: 4%; font-weight: 750;">Alternativa 2</p>
                                                            <p style="position: absolute; top: 58%; left: 4%; font-weight: 750;">Alternativa 3</p>
                                                    
                                                            <button onclick="correto()" style="position: absolute; border-radius: 50px; width: 10%; left: 15%; top: 75%;">A</button>
                                                            <button onclick="errado()" style="position: absolute; border-radius: 30px; width: 10%;  left: 45%; top: 75%;">B</button>
                                                            <button onclick="errado()" style="position: absolute; border-radius: 30px; width: 10%; left: 75%; top: 75%;">C</button>
                                                        </div>`);

            return;
        }

        if (document.getElementById("final").innerHTML == ` <p class="p-2 text-primary w-50">J2</p> `) {
            document.body.insertAdjacentHTML("beforeend", `<div style="top: 44%; height: 8.5%; border-radius: 12px;" class="pergunta">
                                                                    <p style="border-radius: 12px;" class="w-100 p-3 bg-primary text-center">O vencedor é o jogador ${jogador}</p>
                                                            </div>`);

            document.getElementById("jogar").disabled = true;

            return;
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

        document.getElementsByTagName("div")[pJ3 + 1].innerHTML += ` <p class="p-2 text-danger w-50">J3</p> `;

        if (document.getElementsByTagName("div")[pJ3 + 1].classList.contains("bg-dark")) {
            document.getElementById("jogar").disabled = true;

            document.body.insertAdjacentHTML("beforeend", `<div id="pergunta" class="pergunta">
                                                            <p class="w-100 p-3 bg-primary text-center perguntaTitulo">Pergunta para o jogador J3</p>
                                                    
                                                            <p style="position: absolute; top: 12%; font-weight: 750; word-break: break-all;" class="m-2">Texto da Pergunta</p>
                                                    
                                                            <p style="position: absolute; top: 38%; left: 4%; font-weight: 750;">Alternativa 1</p>
                                                            <p style="position: absolute; top: 48%; left: 4%; font-weight: 750;">Alternativa 2</p>
                                                            <p style="position: absolute; top: 58%; left: 4%; font-weight: 750;">Alternativa 3</p>
                                                    
                                                            <button onclick="correto()" style="position: absolute; border-radius: 50px; width: 10%; left: 15%; top: 75%;">A</button>
                                                            <button onclick="errado()" style="position: absolute; border-radius: 30px; width: 10%;  left: 45%; top: 75%;">B</button>
                                                            <button onclick="errado()" style="position: absolute; border-radius: 30px; width: 10%; left: 75%; top: 75%;">C</button>
                                                        </div>`);

            return;
        }

        if (document.getElementById("final").innerHTML == ` <p class="p-2 text-danger w-50">J3</p> `) {
            document.body.insertAdjacentHTML("beforeend", `    <div style="top: 44%; height: 8.5%; border-radius: 12px;" class="pergunta">
            <p style="border-radius: 12px;" class="w-100 p-3 bg-primary text-center">O vencedor é o jogador J3</p>
       </div>`);

            document.getElementById("jogar").disabled = true;

            return;
        }

        jogador = "J4";

        document.getElementById("vez").innerHTML = `Vez de: ${jogador}`;
    } else if (jogador == "J4") {
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

        document.getElementsByTagName("div")[pJ4 + 1].innerHTML += ` <p class="p-2 text-warning w-50">J4</p> `;


        if (document.getElementsByTagName("div")[pJ4 + 1].classList.contains("bg-dark")) {
            document.getElementById("jogar").disabled = true;

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

            return;
        }

        if (document.getElementById("final").innerHTML == ` <p class="p-2 text-warning w-50">J4</p> `) {
            document.body.insertAdjacentHTML("beforeend", `    <div style="top: 44%; height: 8.5%; border-radius: 12px;" class="pergunta">
                                                                    <p style="border-radius: 12px;" class="w-100 p-3 bg-primary text-center">O vencedor é o jogador J4</p>
                                                               </div>`);
            document.getElementById("jogar").disabled = true;

            return;
        }

        jogador = "J1";

        document.getElementById("vez").innerHTML = `Vez de: ${jogador}`;
    }
}