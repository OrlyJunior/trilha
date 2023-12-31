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

var tabLength = document.querySelectorAll("div.div").length - 1;

console.log(tabLength)

function continuar() {
    document.getElementById("jogar").disabled = false;

    document.getElementById("errado").remove();

    if (jogador == "J1") {
        jogador = "J2";

        document.getElementById("vez").innerHTML = `Vez de: ${jogador}`;

        return;
    }

    if (jogador == "J2") {
        jogador = "J3";

        document.getElementById("vez").innerHTML = `Vez de: ${jogador}`;

        return;
    }

    if (jogador == "J3") {
        jogador = "J4";

        document.getElementById("vez").innerHTML = `Vez de: ${jogador}`;

        return;
    }

    if (jogador == "J4") {
        jogador = "J1";

        document.getElementById("vez").innerHTML = `Vez de: ${jogador}`;

        return;
    }
}

function errado() {
    document.getElementById("pergunta").remove();

    document.body.insertAdjacentHTML("beforeend", `<div id="errado" class="errado">
                                                        <p class="w-100 p-3 bg-primary text-center perguntaTitulo">Oops! Essa não era a resposta correta!</p>

                                                        <div style="justify-content: center; width: 100%; border: 0;">
                                                            <button onclick="continuar()" class="botaoC" style="width: 30%; top: 45%;">Continuar</button>
                                                        </div>
                                                    </div>`);
}

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

        pJ1 = (pJ1 + 4) % tabLength;

        document.getElementsByClassName("div")[pJ1].innerHTML += ` <p class="p-2 text-success">${jogador}</p> `;

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

        pJ2 = (pJ2 + 4) % tabLength;

        document.getElementsByClassName("div")[pJ2].innerHTML += ` <p class="p-2 text-primary">${jogador}</p> `;

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

        pJ3 = (pJ3 + 4) % tabLength;

        document.getElementsByClassName("div")[pJ3].innerHTML += ` <p class="p-2 text-danger">${jogador}</p> `;

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

        pJ4 = (pJ4 + 4) % tabLength;

        document.getElementsByClassName("div")[pJ4].innerHTML += ` <p class="p-2 text-warning">${jogador}</p> `;

        jogador = "J1";

        document.getElementById("vez").innerHTML = `Vez de: ${jogador}`;

        document.getElementById("pergunta").remove();

        document.getElementById("jogar").disabled = false;

        return;
    }
}

function dado() {
    resultado = Math.floor(Math.random() * 6);

    if (resultado == 0) {
        resultado = resultado + 1;
    }

    num.innerHTML = resultado;

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

        pJ1 = (pJ1 + resultado);

        if (pJ1 >= 22) {
            pJ1 = 22;

            document.body.insertAdjacentHTML("beforeend", `<div class="venceu">
                                                                <div class="venceu2 bg-primary">
                                                                    <p>O vencedor é o jogador ${jogador}</p>
                                                                </div>
                                                                <div onclick="jogarNovamente()" class="jogarN bg-primary">
                                                                    <p>Jogar novamente</p>
                                                                </div>
                                                                <div onclick="menu()" class="menu bg-primary">
                                                                    <p>Voltar ao menu</p>
                                                                </div>
                                                            </div>`);

            document.getElementById("jogar").disabled = true;

            document.getElementsByClassName("div")[pJ1].innerHTML += ` <p class="text-success p-2 w-50">J1</p> `;

            return;
        }

        document.getElementsByClassName("div")[pJ1].innerHTML += ` <p class="text-success p-2 w-50">J1</p> `;

        if (document.getElementsByClassName("div")[pJ1].classList.contains("bg-dark")) {
            document.getElementById("jogar").disabled = true;

            var sorteioP = Math.floor(Math.random() * 9 + 1);

            if (sorteioP == 0) {
                sorteioP = sorteioP + 1;
            }

            if (sorteioP == 1) {
                document.body.insertAdjacentHTML("beforeend", `<div id="pergunta" class="pergunta">
                                                               <p class="w-100 p-3 bg-primary text-center perguntaTitulo">Pergunta para o jogador ${jogador}</p>
                                                            
                                                               <p class="linha1">Segundo a Primeira Lei de Kepler:</p>
                                                            
                                                               <p style="top: 20%;" class="alternativas">A - A velocidade de translação de um planeta que orbita o Sol é sempre constante ao longo da órbita.</p>
                                                               <p style="top: 42%;" class="alternativas">B - A órbita dos planetas em torno do Sol é elíptica e tem o Sol em um de seus focos.</p>
                                                               <p style="top: 60%;" class="alternativas">C - A linha imaginária que liga a Terra até o Sol varre áreas iguais em períodos iguais.</p>
                                                            
                                                               <button onclick="errado()" class="botaoA" style="left: 8%;">A</button>
                                                               <button onclick="correto()" class="botaoA" style="left: 40%;">B</button>
                                                               <button onclick="errado()" class="botaoA" style="left: 72%;">C</button>
                                                            </div>`);

                return;
            }

            if (sorteioP == 2) {
                document.body.insertAdjacentHTML("beforeend", `<div id="pergunta" class="pergunta">
                                                                    <p class="w-100 p-3 bg-primary text-center perguntaTitulo">Pergunta para o jogador ${jogador}</p>
                                                                
                                                                    <p class="linha1">Kepler fez observações detalhadas do movimento de qual planeta ao redor do Sol?</p>
                                                                
                                                                    <p style="top: 25%;" class="alternativas">A - Terra.</p>
                                                                    <p style="top: 42%;" class="alternativas">B - Vênus.</p>
                                                                    <p style="top: 60%;" class="alternativas">C - Saturno.</p>
                                                                
                                                                    <button onclick="errado()" class="botaoA" style="left: 8%;">A</button>
                                                                    <button onclick="correto()" class="botaoA" style="left: 40%;">B</button>
                                                                    <button onclick="errado()" class="botaoA" style="left: 72%;">C</button>
                                                                </div>`);

                return;
            }

            if (sorteioP == 3) {
                document.body.insertAdjacentHTML("beforeend", `<div id="pergunta" class="pergunta">
                                                                        <p class="w-100 p-3 bg-primary text-center perguntaTitulo">Pergunta para o jogador ${jogador}</p>
                                                                
                                                                        <p class="linha1">Baseado nas leis de Kepler, a velocidade de um planeta:</p>
                                                                
                                                                        <p style="top: 26%;" class="alternativas">A - Independe de sua posição relativamente ao sol.</p>
                                                                        <p style="top: 43%;" class="alternativas">B - Diminui quando está mais próximo do sol.</p>
                                                                        <p style="top: 61%;" class="alternativas">C - Aumenta quando está mais próximo do sol.</p>
                                                                
                                                                        <button onclick="errado()" class="botaoA" style="left: 8%;">A</button>
                                                                        <button onclick="errado()" class="botaoA" style="left: 40%;">B</button>
                                                                        <button onclick="correto()" class="botaoA" style="left: 72%;">C</button>
                                                                    </div>`);

                return;
            }

            if (sorteioP == 4) {
                document.body.insertAdjacentHTML("beforeend", `<div id="pergunta" class="pergunta">
                                                                <p class="w-100 p-3 bg-primary text-center perguntaTitulo">Pergunta para o jogador ${jogador}</p>
                                                        
                                                                <p class="linha1">No sistema planetário:</p>
                                                        
                                                                <p style="top: 21%;" class="alternativas">A - Cada planeta se move numa trajetória elíptica, tendo o sol como o centro.</p>
                                                                <p style="top: 38.5%;" class="alternativas">B - A linha que une o sol ao planeta descreve áreas iguais em tempos iguais.</p>
                                                                <p style="top: 57%;" class="alternativas">C - A razão do raio de órbita para seu período é uma constante universal.</p>
                                                        
                                                                <button onclick="errado()" class="botaoA" style="left: 8%;">A</button>
                                                                <button onclick="correto()" class="botaoA" style="left: 40%;">B</button>
                                                                <button onclick="errado()" class="botaoA" style="left: 72%;">C</button>
                                                            </div>`);

                return;
            }

            if (sorteioP == 5) {
                document.body.insertAdjacentHTML("beforeend", `<div id="pergunta" class="pergunta">
                                                                <p class="w-100 p-3 bg-primary text-center perguntaTitulo">Pergunta para o jogador ${jogador}</p>
                                                            
                                                                <p class="linha1">Qual é o nome da linha imaginária que liga um planeta ao Sol em sua órbita elíptica?</p>
                                                            
                                                                <p style="top: 20%;" class="alternativas">A - Linha de Ação.</p>
                                                                <p style="top: 42%;" class="alternativas">B - Linha de Kepler.</p>
                                                                <p style="top: 60%;" class="alternativas">C - Linha de Focalização.</p>
                                                            
                                                                <button onclick="errado()" class="botaoA" style="left: 8%;">A</button>
                                                                <button onclick="errado()" class="botaoA" style="left: 40%;">B</button>
                                                                <button onclick="correto()" class="botaoA" style="left: 72%;">C</button>
                                                            </div>`);

                return;
            }

            if (sorteioP == 6) {
                document.body.insertAdjacentHTML("beforeend", `<div id="pergunta" class="pergunta">
                                                                <p class="w-100 p-3 bg-primary text-center perguntaTitulo">Pergunta para o jogador ${jogador}</p>
                                                            
                                                                <p class="linha1">Qual dos planetas do Sistema Solar tem o período orbital mais curto?</p>
                                                            
                                                                <p style="top: 25%;" class="alternativas">A - Mercúrio.</p>
                                                                <p style="top: 42%;" class="alternativas">B - Vênus.</p>
                                                                <p style="top: 60%;" class="alternativas">C - Terra.</p>
                                                            
                                                                <button onclick="correto()" class="botaoA" style="left: 8%;">A</button>
                                                                <button onclick="errado()" class="botaoA" style="left: 40%;">B</button>
                                                                <button onclick="errado()" class="botaoA" style="left: 72%;">C</button>
                                                            </div>`);

                return;
            }

            if (sorteioP == 7) {
                document.body.insertAdjacentHTML("beforeend", `<div id="pergunta" class="pergunta">
                                                                <p class="w-100 p-3 bg-primary text-center perguntaTitulo">Pergunta para o jogador ${jogador}</p>
                                                            
                                                                <p class="linha1">Em que século Johannes Kepler formulou suas leis do movimento planetário?</p>
                                                            
                                                                <p style="top: 25%;" class="alternativas">A - Século XVIII.</p>
                                                                <p style="top: 42%;" class="alternativas">B - Século XVII.</p>
                                                                <p style="top: 60%;" class="alternativas">C - Século XVI.</p>
                                                            
                                                                <button onclick="errado()" class="botaoA" style="left: 8%;">A</button>
                                                                <button onclick="correto()" class="botaoA" style="left: 40%;">B</button>
                                                                <button onclick="errado()" class="botaoA" style="left: 72%;">C</button>
                                                            </div>`);

                return;
            }

            if (sorteioP == 8) {
                document.body.insertAdjacentHTML("beforeend", `<div id="pergunta" class="pergunta">
                                                                <p class="w-100 p-3 bg-primary text-center perguntaTitulo">Pergunta para o jogador ${jogador}</p>
                                                            
                                                                <p class="linha1">Qual planeta do Sistema Solar possui uma órbita mais próxima de um círculo, de acordo com as leis de Kepler?</p>
                                                            
                                                                <p style="top: 25%;" class="alternativas">A - Terra.</p>
                                                                <p style="top: 42%;" class="alternativas">B - Marte.</p>
                                                                <p style="top: 60%;" class="alternativas">C - Mercúrio.</p>
                                                            
                                                                <button onclick="correto()" class="botaoA" style="left: 8%;">A</button>
                                                                <button onclick="errado()" class="botaoA" style="left: 40%;">B</button>
                                                                <button onclick="errado()" class="botaoA" style="left: 72%;">C</button>
                                                            </div>`);

                return;
            }

            if (sorteioP == 9) {
                document.body.insertAdjacentHTML("beforeend", `<div id="pergunta" class="pergunta">
                <p class="w-100 p-3 bg-primary text-center perguntaTitulo">Pergunta para o jogador ${jogador}</p>
            
                <p class="linha1">Qual dos seguintes cientistas trabalhou com Johannes Kepler e contribuiu para a compreensão das leis do movimento planetário?</p>
            
                <p style="top: 32%;" class="alternativas">A - Copérnico.</p>
                <p style="top: 49%;" class="alternativas">B - Albert Einstein.</p>
                <p style="top: 67%;" class="alternativas">C - Galileu Galilei.</p>
            
                <button onclick="errado()" class="botaoA" style="left: 8%;">A</button>
                <button onclick="errado()" class="botaoA" style="left: 40%;">B</button>
                <button onclick="correto()" class="botaoA" style="left: 72%;">C</button>
            </div>`);

                return;
            }
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

        pJ2 = (pJ2 + resultado);

        if (pJ2 >= 22) {
            pJ2 = 22;

            document.body.insertAdjacentHTML("beforeend", `<div class="venceu">
                                                                <div class="venceu2 bg-primary">
                                                                    <p>O vencedor é o jogador ${jogador}</p>
                                                                </div>
                                                                <div onclick="jogarNovamente()" class="jogarN bg-primary">
                                                                    <p>Jogar novamente</p>
                                                                </div>
                                                                <div onclick="menu()" class="menu bg-primary">
                                                                    <p>Voltar ao menu</p>
                                                                </div>
                                                            </div>`);

            document.getElementById("jogar").disabled = true;

            document.getElementsByClassName("div")[pJ2].innerHTML += ` <p class="p-2 text-primary w-50">J2</p> `;

            return;
        }

        document.getElementsByClassName("div")[pJ2].innerHTML += ` <p class="p-2 text-primary w-50">J2</p> `;

        if (document.getElementsByClassName("div")[pJ2].classList.contains("bg-dark")) {
            document.getElementById("jogar").disabled = true;

            var sorteioP = Math.floor(Math.random() * 9 + 1);

            if (sorteioP == 0) {
                sorteioP = sorteioP + 1;
            }

            if (sorteioP == 1) {
                document.body.insertAdjacentHTML("beforeend", `<div id="pergunta" class="pergunta">
                                                                   <p class="w-100 p-3 bg-primary text-center perguntaTitulo">Pergunta para o jogador ${jogador}</p>
                                                                
                                                                   <p class="linha1">Segundo a Primeira Lei de Kepler:</p>
                                                                
                                                                   <p style="top: 20%;" class="alternativas">A - A velocidade de translação de um planeta que orbita o Sol é sempre constante ao longo da órbita.</p>
                                                                   <p style="top: 42%;" class="alternativas">B - A órbita dos planetas em torno do Sol é elíptica e tem o Sol em um de seus focos.</p>
                                                                   <p style="top: 60%;" class="alternativas">C - A linha imaginária que liga a Terra até o Sol varre áreas iguais em períodos iguais.</p>
                                                                
                                                                   <button onclick="errado()" class="botaoA" style="left: 8%;">A</button>
                                                                   <button onclick="correto()" class="botaoA" style="left: 40%;">B</button>
                                                                   <button onclick="errado()" class="botaoA" style="left: 72%;">C</button>
                                                                </div>`);

                return;
            }

            if (sorteioP == 2) {
                document.body.insertAdjacentHTML("beforeend", `<div id="pergunta" class="pergunta">
                                                                        <p class="w-100 p-3 bg-primary text-center perguntaTitulo">Pergunta para o jogador ${jogador}</p>
                                                                    
                                                                        <p class="linha1">Kepler fez observações detalhadas do movimento de qual planeta ao redor do Sol?</p>
                                                                    
                                                                        <p style="top: 25%;" class="alternativas">A - Terra.</p>
                                                                        <p style="top: 42%;" class="alternativas">B - Vênus.</p>
                                                                        <p style="top: 60%;" class="alternativas">C - Saturno.</p>
                                                                    
                                                                        <button onclick="errado()" class="botaoA" style="left: 8%;">A</button>
                                                                        <button onclick="correto()" class="botaoA" style="left: 40%;">B</button>
                                                                        <button onclick="errado()" class="botaoA" style="left: 72%;">C</button>
                                                                    </div>`);

                return;
            }

            if (sorteioP == 3) {
                document.body.insertAdjacentHTML("beforeend", `<div id="pergunta" class="pergunta">
                                                                            <p class="w-100 p-3 bg-primary text-center perguntaTitulo">Pergunta para o jogador ${jogador}</p>
                                                                    
                                                                            <p class="linha1">Baseado nas leis de Kepler, a velocidade de um planeta:</p>
                                                                    
                                                                            <p style="top: 26%;" class="alternativas">A - Independe de sua posição relativamente ao sol.</p>
                                                                            <p style="top: 43%;" class="alternativas">B - Diminui quando está mais próximo do sol.</p>
                                                                            <p style="top: 61%;" class="alternativas">C - Aumenta quando está mais próximo do sol.</p>
                                                                    
                                                                            <button onclick="errado()" class="botaoA" style="left: 8%;">A</button>
                                                                            <button onclick="errado()" class="botaoA" style="left: 40%;">B</button>
                                                                            <button onclick="correto()" class="botaoA" style="left: 72%;">C</button>
                                                                        </div>`);

                return;
            }

            if (sorteioP == 4) {
                document.body.insertAdjacentHTML("beforeend", `<div id="pergunta" class="pergunta">
                                                                    <p class="w-100 p-3 bg-primary text-center perguntaTitulo">Pergunta para o jogador ${jogador}</p>
                                                            
                                                                    <p class="linha1">No sistema planetário:</p>
                                                            
                                                                    <p style="top: 21%;" class="alternativas">A - Cada planeta se move numa trajetória elíptica, tendo o sol como o centro.</p>
                                                                    <p style="top: 38.5%;" class="alternativas">B - A linha que une o sol ao planeta descreve áreas iguais em tempos iguais.</p>
                                                                    <p style="top: 57%;" class="alternativas">C - A razão do raio de órbita para seu período é uma constante universal.</p>
                                                            
                                                                    <button onclick="errado()" class="botaoA" style="left: 8%;">A</button>
                                                                    <button onclick="correto()" class="botaoA" style="left: 40%;">B</button>
                                                                    <button onclick="errado()" class="botaoA" style="left: 72%;">C</button>
                                                                </div>`);

                return;
            }

            if (sorteioP == 5) {
                document.body.insertAdjacentHTML("beforeend", `<div id="pergunta" class="pergunta">
                                                                    <p class="w-100 p-3 bg-primary text-center perguntaTitulo">Pergunta para o jogador ${jogador}</p>
                                                                
                                                                    <p class="linha1">Qual é o nome da linha imaginária que liga um planeta ao Sol em sua órbita elíptica?</p>
                                                                
                                                                    <p style="top: 20%;" class="alternativas">A - Linha de Ação.</p>
                                                                    <p style="top: 42%;" class="alternativas">B - Linha de Kepler.</p>
                                                                    <p style="top: 60%;" class="alternativas">C - Linha de Focalização.</p>
                                                                
                                                                    <button onclick="errado()" class="botaoA" style="left: 8%;">A</button>
                                                                    <button onclick="errado()" class="botaoA" style="left: 40%;">B</button>
                                                                    <button onclick="correto()" class="botaoA" style="left: 72%;">C</button>
                                                                </div>`);

                return;
            }

            if (sorteioP == 6) {
                document.body.insertAdjacentHTML("beforeend", `<div id="pergunta" class="pergunta">
                                                                    <p class="w-100 p-3 bg-primary text-center perguntaTitulo">Pergunta para o jogador ${jogador}</p>
                                                                
                                                                    <p class="linha1">Qual dos planetas do Sistema Solar tem o período orbital mais curto?</p>
                                                                
                                                                    <p style="top: 25%;" class="alternativas">A - Mercúrio.</p>
                                                                    <p style="top: 42%;" class="alternativas">B - Vênus.</p>
                                                                    <p style="top: 60%;" class="alternativas">C - Terra.</p>
                                                                
                                                                    <button onclick="correto()" class="botaoA" style="left: 8%;">A</button>
                                                                    <button onclick="errado()" class="botaoA" style="left: 40%;">B</button>
                                                                    <button onclick="errado()" class="botaoA" style="left: 72%;">C</button>
                                                                </div>`);

                return;
            }

            if (sorteioP == 7) {
                document.body.insertAdjacentHTML("beforeend", `<div id="pergunta" class="pergunta">
                                                                    <p class="w-100 p-3 bg-primary text-center perguntaTitulo">Pergunta para o jogador ${jogador}</p>
                                                                
                                                                    <p class="linha1">Em que século Johannes Kepler formulou suas leis do movimento planetário?</p>
                                                                
                                                                    <p style="top: 25%;" class="alternativas">A - Século XVIII.</p>
                                                                    <p style="top: 42%;" class="alternativas">B - Século XVII.</p>
                                                                    <p style="top: 60%;" class="alternativas">C - Século XVI.</p>
                                                                
                                                                    <button onclick="errado()" class="botaoA" style="left: 8%;">A</button>
                                                                    <button onclick="correto()" class="botaoA" style="left: 40%;">B</button>
                                                                    <button onclick="errado()" class="botaoA" style="left: 72%;">C</button>
                                                                </div>`);

                return;
            }

            if (sorteioP == 8) {
                document.body.insertAdjacentHTML("beforeend", `<div id="pergunta" class="pergunta">
                                                                    <p class="w-100 p-3 bg-primary text-center perguntaTitulo">Pergunta para o jogador ${jogador}</p>
                                                                
                                                                    <p class="linha1">Qual planeta do Sistema Solar possui uma órbita mais próxima de um círculo, de acordo com as leis de Kepler?</p>
                                                                
                                                                    <p style="top: 25%;" class="alternativas">A - Terra.</p>
                                                                    <p style="top: 42%;" class="alternativas">B - Marte.</p>
                                                                    <p style="top: 60%;" class="alternativas">C - Mercúrio.</p>
                                                                
                                                                    <button onclick="correto()" class="botaoA" style="left: 8%;">A</button>
                                                                    <button onclick="errado()" class="botaoA" style="left: 40%;">B</button>
                                                                    <button onclick="errado()" class="botaoA" style="left: 72%;">C</button>
                                                                </div>`);

                return;
            }

            if (sorteioP == 9) {
                document.body.insertAdjacentHTML("beforeend", `<div id="pergunta" class="pergunta">
                <p class="w-100 p-3 bg-primary text-center perguntaTitulo">Pergunta para o jogador ${jogador}</p>
            
                <p class="linha1">Qual dos seguintes cientistas trabalhou com Johannes Kepler e contribuiu para a compreensão das leis do movimento planetário?</p>
            
                <p style="top: 32%;" class="alternativas">A - Copérnico.</p>
                <p style="top: 49%;" class="alternativas">B - Albert Einstein.</p>
                <p style="top: 67%;" class="alternativas">C - Galileu Galilei.</p>
            
                <button onclick="errado()" class="botaoA" style="left: 8%;">A</button>
                <button onclick="errado()" class="botaoA" style="left: 40%;">B</button>
                <button onclick="correto()" class="botaoA" style="left: 72%;">C</button>
            </div>`);

                return;
            }
        }

        jogador = "J3";

        document.getElementById("vez").innerHTML = `Vez de: ${jogador}`;
    } else if (jogador == "J3") {
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

        pJ3 = (pJ3 + resultado);

        if (pJ3 >= 22) {
            pJ3 = 22;

            document.body.insertAdjacentHTML("beforeend", `<div class="venceu">
                                                                <div class="venceu2 bg-primary">
                                                                    <p>O vencedor é o jogador ${jogador}</p>
                                                                </div>
                                                                <div onclick="jogarNovamente()" class="jogarN bg-primary">
                                                                    <p>Jogar novamente</p>
                                                                </div>
                                                                <div onclick="menu()" class="menu bg-primary">
                                                                    <p>Voltar ao menu</p>
                                                                </div>
                                                            </div>`);

            document.getElementById("jogar").disabled = true;

            document.getElementsByClassName("div")[pJ3].innerHTML += ` <p class="p-2 text-danger w-50">J3</p> `;

            return;
        }

        document.getElementsByClassName("div")[pJ3].innerHTML += ` <p class="p-2 text-danger w-50">J3</p> `;

        if (document.getElementsByClassName("div")[pJ3].classList.contains("bg-dark")) {
            document.getElementById("jogar").disabled = true;

            var sorteioP = Math.floor(Math.random() * 9 + 1);

            if (sorteioP == 0) {
                sorteioP = sorteioP + 1;
            }

            if (sorteioP == 1) {
                document.body.insertAdjacentHTML("beforeend", `<div id="pergunta" class="pergunta">
                                                                   <p class="w-100 p-3 bg-primary text-center perguntaTitulo">Pergunta para o jogador ${jogador}</p>
                                                                
                                                                   <p class="linha1">Segundo a Primeira Lei de Kepler:</p>
                                                                
                                                                   <p style="top: 20%;" class="alternativas">A - A velocidade de translação de um planeta que orbita o Sol é sempre constante ao longo da órbita.</p>
                                                                   <p style="top: 42%;" class="alternativas">B - A órbita dos planetas em torno do Sol é elíptica e tem o Sol em um de seus focos.</p>
                                                                   <p style="top: 60%;" class="alternativas">C - A linha imaginária que liga a Terra até o Sol varre áreas iguais em períodos iguais.</p>
                                                                
                                                                   <button onclick="errado()" class="botaoA" style="left: 8%;">A</button>
                                                                   <button onclick="correto()" class="botaoA" style="left: 40%;">B</button>
                                                                   <button onclick="errado()" class="botaoA" style="left: 72%;">C</button>
                                                                </div>`);

                return;
            }

            if (sorteioP == 2) {
                document.body.insertAdjacentHTML("beforeend", `<div id="pergunta" class="pergunta">
                                                                        <p class="w-100 p-3 bg-primary text-center perguntaTitulo">Pergunta para o jogador ${jogador}</p>
                                                                    
                                                                        <p class="linha1">Kepler fez observações detalhadas do movimento de qual planeta ao redor do Sol?</p>
                                                                    
                                                                        <p style="top: 25%;" class="alternativas">A - Terra.</p>
                                                                        <p style="top: 42%;" class="alternativas">B - Vênus.</p>
                                                                        <p style="top: 60%;" class="alternativas">C - Saturno.</p>
                                                                    
                                                                        <button onclick="errado()" class="botaoA" style="left: 8%;">A</button>
                                                                        <button onclick="correto()" class="botaoA" style="left: 40%;">B</button>
                                                                        <button onclick="errado()" class="botaoA" style="left: 72%;">C</button>
                                                                    </div>`);

                return;
            }

            if (sorteioP == 3) {
                document.body.insertAdjacentHTML("beforeend", `<div id="pergunta" class="pergunta">
                                                                            <p class="w-100 p-3 bg-primary text-center perguntaTitulo">Pergunta para o jogador ${jogador}</p>
                                                                    
                                                                            <p class="linha1">Baseado nas leis de Kepler, a velocidade de um planeta:</p>
                                                                    
                                                                            <p style="top: 26%;" class="alternativas">A - Independe de sua posição relativamente ao sol.</p>
                                                                            <p style="top: 43%;" class="alternativas">B - Diminui quando está mais próximo do sol.</p>
                                                                            <p style="top: 61%;" class="alternativas">C - Aumenta quando está mais próximo do sol.</p>
                                                                    
                                                                            <button onclick="errado()" class="botaoA" style="left: 8%;">A</button>
                                                                            <button onclick="errado()" class="botaoA" style="left: 40%;">B</button>
                                                                            <button onclick="correto()" class="botaoA" style="left: 72%;">C</button>
                                                                        </div>`);

                return;
            }

            if (sorteioP == 4) {
                document.body.insertAdjacentHTML("beforeend", `<div id="pergunta" class="pergunta">
                                                                    <p class="w-100 p-3 bg-primary text-center perguntaTitulo">Pergunta para o jogador ${jogador}</p>
                                                            
                                                                    <p class="linha1">No sistema planetário:</p>
                                                            
                                                                    <p style="top: 21%;" class="alternativas">A - Cada planeta se move numa trajetória elíptica, tendo o sol como o centro.</p>
                                                                    <p style="top: 38.5%;" class="alternativas">B - A linha que une o sol ao planeta descreve áreas iguais em tempos iguais.</p>
                                                                    <p style="top: 57%;" class="alternativas">C - A razão do raio de órbita para seu período é uma constante universal.</p>
                                                            
                                                                    <button onclick="errado()" class="botaoA" style="left: 8%;">A</button>
                                                                    <button onclick="correto()" class="botaoA" style="left: 40%;">B</button>
                                                                    <button onclick="errado()" class="botaoA" style="left: 72%;">C</button>
                                                                </div>`);

                return;
            }

            if (sorteioP == 5) {
                document.body.insertAdjacentHTML("beforeend", `<div id="pergunta" class="pergunta">
                                                                    <p class="w-100 p-3 bg-primary text-center perguntaTitulo">Pergunta para o jogador ${jogador}</p>
                                                                
                                                                    <p class="linha1">Qual é o nome da linha imaginária que liga um planeta ao Sol em sua órbita elíptica?</p>
                                                                
                                                                    <p style="top: 20%;" class="alternativas">A - Linha de Ação.</p>
                                                                    <p style="top: 42%;" class="alternativas">B - Linha de Kepler.</p>
                                                                    <p style="top: 60%;" class="alternativas">C - Linha de Focalização.</p>
                                                                
                                                                    <button onclick="errado()" class="botaoA" style="left: 8%;">A</button>
                                                                    <button onclick="errado()" class="botaoA" style="left: 40%;">B</button>
                                                                    <button onclick="correto()" class="botaoA" style="left: 72%;">C</button>
                                                                </div>`);

                return;
            }

            if (sorteioP == 6) {
                document.body.insertAdjacentHTML("beforeend", `<div id="pergunta" class="pergunta">
                                                                    <p class="w-100 p-3 bg-primary text-center perguntaTitulo">Pergunta para o jogador ${jogador}</p>
                                                                
                                                                    <p class="linha1">Qual dos planetas do Sistema Solar tem o período orbital mais curto?</p>
                                                                
                                                                    <p style="top: 25%;" class="alternativas">A - Mercúrio.</p>
                                                                    <p style="top: 42%;" class="alternativas">B - Vênus.</p>
                                                                    <p style="top: 60%;" class="alternativas">C - Terra.</p>
                                                                
                                                                    <button onclick="correto()" class="botaoA" style="left: 8%;">A</button>
                                                                    <button onclick="errado()" class="botaoA" style="left: 40%;">B</button>
                                                                    <button onclick="errado()" class="botaoA" style="left: 72%;">C</button>
                                                                </div>`);

                return;
            }

            if (sorteioP == 7) {
                document.body.insertAdjacentHTML("beforeend", `<div id="pergunta" class="pergunta">
                                                                    <p class="w-100 p-3 bg-primary text-center perguntaTitulo">Pergunta para o jogador ${jogador}</p>
                                                                
                                                                    <p class="linha1">Em que século Johannes Kepler formulou suas leis do movimento planetário?</p>
                                                                
                                                                    <p style="top: 25%;" class="alternativas">A - Século XVIII.</p>
                                                                    <p style="top: 42%;" class="alternativas">B - Século XVII.</p>
                                                                    <p style="top: 60%;" class="alternativas">C - Século XVI.</p>
                                                                
                                                                    <button onclick="errado()" class="botaoA" style="left: 8%;">A</button>
                                                                    <button onclick="correto()" class="botaoA" style="left: 40%;">B</button>
                                                                    <button onclick="errado()" class="botaoA" style="left: 72%;">C</button>
                                                                </div>`);

                return;
            }

            if (sorteioP == 8) {
                document.body.insertAdjacentHTML("beforeend", `<div id="pergunta" class="pergunta">
                                                                    <p class="w-100 p-3 bg-primary text-center perguntaTitulo">Pergunta para o jogador ${jogador}</p>
                                                                
                                                                    <p class="linha1">Qual planeta do Sistema Solar possui uma órbita mais próxima de um círculo, de acordo com as leis de Kepler?</p>
                                                                
                                                                    <p style="top: 25%;" class="alternativas">A - Terra.</p>
                                                                    <p style="top: 42%;" class="alternativas">B - Marte.</p>
                                                                    <p style="top: 60%;" class="alternativas">C - Mercúrio.</p>
                                                                
                                                                    <button onclick="correto()" class="botaoA" style="left: 8%;">A</button>
                                                                    <button onclick="errado()" class="botaoA" style="left: 40%;">B</button>
                                                                    <button onclick="errado()" class="botaoA" style="left: 72%;">C</button>
                                                                </div>`);

                return;
            }

            if (sorteioP == 9) {
                document.body.insertAdjacentHTML("beforeend", `<div id="pergunta" class="pergunta">
                <p class="w-100 p-3 bg-primary text-center perguntaTitulo">Pergunta para o jogador ${jogador}</p>
            
                <p class="linha1">Qual dos seguintes cientistas trabalhou com Johannes Kepler e contribuiu para a compreensão das leis do movimento planetário?</p>
            
                <p style="top: 32%;" class="alternativas">A - Copérnico.</p>
                <p style="top: 49%;" class="alternativas">B - Albert Einstein.</p>
                <p style="top: 67%;" class="alternativas">C - Galileu Galilei.</p>
            
                <button onclick="errado()" class="botaoA" style="left: 8%;">A</button>
                <button onclick="errado()" class="botaoA" style="left: 40%;">B</button>
                <button onclick="correto()" class="botaoA" style="left: 72%;">C</button>
            </div>`);

                return;
            }


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

        pJ4 = (pJ4 + resultado);

        if (pJ4 >= 22) {
            pJ4 = 22;

            document.body.insertAdjacentHTML("beforeend", `<div class="venceu">
                                                                <div class="venceu2 bg-primary">
                                                                    <p>O vencedor é o jogador ${jogador}</p>
                                                                </div>
                                                                <div onclick="jogarNovamente()" class="jogarN bg-primary">
                                                                    <p>Jogar novamente</p>
                                                                </div>
                                                                <div onclick="menu()" class="menu bg-primary">
                                                                    <p>Voltar ao menu</p>
                                                                </div>
                                                            </div>`);

            document.getElementById("jogar").disabled = true;

            document.getElementsByClassName("div")[pJ4].innerHTML += ` <p class="p-2 text-warning w-50">J4</p> `;

            return;
        }

        document.getElementsByClassName("div")[pJ4].innerHTML += ` <p class="p-2 text-warning w-50">J4</p> `;


        if (document.getElementsByClassName("div")[pJ4].classList.contains("bg-dark")) {
            document.getElementById("jogar").disabled = true;

            var sorteioP = Math.floor(Math.random() * 9 + 1);

            if (sorteioP == 0) {
                sorteioP = sorteioP + 1;
            }

            if (sorteioP == 1) {
                document.body.insertAdjacentHTML("beforeend", `<div id="pergunta" class="pergunta">
                                                                   <p class="w-100 p-3 bg-primary text-center perguntaTitulo">Pergunta para o jogador ${jogador}</p>
                                                                
                                                                   <p class="linha1">Segundo a Primeira Lei de Kepler:</p>
                                                                
                                                                   <p style="top: 20%;" class="alternativas">A - A velocidade de translação de um planeta que orbita o Sol é sempre constante ao longo da órbita.</p>
                                                                   <p style="top: 42%;" class="alternativas">B - A órbita dos planetas em torno do Sol é elíptica e tem o Sol em um de seus focos.</p>
                                                                   <p style="top: 60%;" class="alternativas">C - A linha imaginária que liga a Terra até o Sol varre áreas iguais em períodos iguais.</p>
                                                                
                                                                   <button onclick="errado()" class="botaoA" style="left: 8%;">A</button>
                                                                   <button onclick="correto()" class="botaoA" style="left: 40%;">B</button>
                                                                   <button onclick="errado()" class="botaoA" style="left: 72%;">C</button>
                                                                </div>`);

                return;
            }

            if (sorteioP == 2) {
                document.body.insertAdjacentHTML("beforeend", `<div id="pergunta" class="pergunta">
                                                                        <p class="w-100 p-3 bg-primary text-center perguntaTitulo">Pergunta para o jogador ${jogador}</p>
                                                                    
                                                                        <p class="linha1">Kepler fez observações detalhadas do movimento de qual planeta ao redor do Sol?</p>
                                                                    
                                                                        <p style="top: 25%;" class="alternativas">A - Terra.</p>
                                                                        <p style="top: 42%;" class="alternativas">B - Vênus.</p>
                                                                        <p style="top: 60%;" class="alternativas">C - Saturno.</p>
                                                                    
                                                                        <button onclick="errado()" class="botaoA" style="left: 8%;">A</button>
                                                                        <button onclick="correto()" class="botaoA" style="left: 40%;">B</button>
                                                                        <button onclick="errado()" class="botaoA" style="left: 72%;">C</button>
                                                                    </div>`);

                return;
            }

            if (sorteioP == 3) {
                document.body.insertAdjacentHTML("beforeend", `<div id="pergunta" class="pergunta">
                                                                            <p class="w-100 p-3 bg-primary text-center perguntaTitulo">Pergunta para o jogador ${jogador}</p>
                                                                    
                                                                            <p class="linha1">Baseado nas leis de Kepler, a velocidade de um planeta:</p>
                                                                    
                                                                            <p style="top: 26%;" class="alternativas">A - Independe de sua posição relativamente ao sol.</p>
                                                                            <p style="top: 43%;" class="alternativas">B - Diminui quando está mais próximo do sol.</p>
                                                                            <p style="top: 61%;" class="alternativas">C - Aumenta quando está mais próximo do sol.</p>
                                                                    
                                                                            <button onclick="errado()" class="botaoA" style="left: 8%;">A</button>
                                                                            <button onclick="errado()" class="botaoA" style="left: 40%;">B</button>
                                                                            <button onclick="correto()" class="botaoA" style="left: 72%;">C</button>
                                                                        </div>`);

                return;
            }

            if (sorteioP == 4) {
                document.body.insertAdjacentHTML("beforeend", `<div id="pergunta" class="pergunta">
                                                                    <p class="w-100 p-3 bg-primary text-center perguntaTitulo">Pergunta para o jogador ${jogador}</p>
                                                            
                                                                    <p class="linha1">No sistema planetário:</p>
                                                            
                                                                    <p style="top: 21%;" class="alternativas">A - Cada planeta se move numa trajetória elíptica, tendo o sol como o centro.</p>
                                                                    <p style="top: 38.5%;" class="alternativas">B - A linha que une o sol ao planeta descreve áreas iguais em tempos iguais.</p>
                                                                    <p style="top: 57%;" class="alternativas">C - A razão do raio de órbita para seu período é uma constante universal.</p>
                                                            
                                                                    <button onclick="errado()" class="botaoA" style="left: 8%;">A</button>
                                                                    <button onclick="correto()" class="botaoA" style="left: 40%;">B</button>
                                                                    <button onclick="errado()" class="botaoA" style="left: 72%;">C</button>
                                                                </div>`);

                return;
            }

            if (sorteioP == 5) {
                document.body.insertAdjacentHTML("beforeend", `<div id="pergunta" class="pergunta">
                                                                    <p class="w-100 p-3 bg-primary text-center perguntaTitulo">Pergunta para o jogador ${jogador}</p>
                                                                
                                                                    <p class="linha1">Qual é o nome da linha imaginária que liga um planeta ao Sol em sua órbita elíptica?</p>
                                                                
                                                                    <p style="top: 20%;" class="alternativas">A - Linha de Ação.</p>
                                                                    <p style="top: 42%;" class="alternativas">B - Linha de Kepler.</p>
                                                                    <p style="top: 60%;" class="alternativas">C - Linha de Focalização.</p>
                                                                
                                                                    <button onclick="errado()" class="botaoA" style="left: 8%;">A</button>
                                                                    <button onclick="errado()" class="botaoA" style="left: 40%;">B</button>
                                                                    <button onclick="correto()" class="botaoA" style="left: 72%;">C</button>
                                                                </div>`);

                return;
            }

            if (sorteioP == 6) {
                document.body.insertAdjacentHTML("beforeend", `<div id="pergunta" class="pergunta">
                                                                    <p class="w-100 p-3 bg-primary text-center perguntaTitulo">Pergunta para o jogador ${jogador}</p>
                                                                
                                                                    <p class="linha1">Qual dos planetas do Sistema Solar tem o período orbital mais curto?</p>
                                                                
                                                                    <p style="top: 25%;" class="alternativas">A - Mercúrio.</p>
                                                                    <p style="top: 42%;" class="alternativas">B - Vênus.</p>
                                                                    <p style="top: 60%;" class="alternativas">C - Terra.</p>
                                                                
                                                                    <button onclick="correto()" class="botaoA" style="left: 8%;">A</button>
                                                                    <button onclick="errado()" class="botaoA" style="left: 40%;">B</button>
                                                                    <button onclick="errado()" class="botaoA" style="left: 72%;">C</button>
                                                                </div>`);

                return;
            }

            if (sorteioP == 7) {
                document.body.insertAdjacentHTML("beforeend", `<div id="pergunta" class="pergunta">
                                                                    <p class="w-100 p-3 bg-primary text-center perguntaTitulo">Pergunta para o jogador ${jogador}</p>
                                                                
                                                                    <p class="linha1">Em que século Johannes Kepler formulou suas leis do movimento planetário?</p>
                                                                
                                                                    <p style="top: 25%;" class="alternativas">A - Século XVIII.</p>
                                                                    <p style="top: 42%;" class="alternativas">B - Século XVII.</p>
                                                                    <p style="top: 60%;" class="alternativas">C - Século XVI.</p>
                                                                
                                                                    <button onclick="errado()" class="botaoA" style="left: 8%;">A</button>
                                                                    <button onclick="correto()" class="botaoA" style="left: 40%;">B</button>
                                                                    <button onclick="errado()" class="botaoA" style="left: 72%;">C</button>
                                                                </div>`);

                return;
            }

            if (sorteioP == 8) {
                document.body.insertAdjacentHTML("beforeend", `<div id="pergunta" class="pergunta">
                                                                    <p class="w-100 p-3 bg-primary text-center perguntaTitulo">Pergunta para o jogador ${jogador}</p>
                                                                
                                                                    <p class="linha1">Qual planeta do Sistema Solar possui uma órbita mais próxima de um círculo, de acordo com as leis de Kepler?</p>
                                                                
                                                                    <p style="top: 25%;" class="alternativas">A - Terra.</p>
                                                                    <p style="top: 42%;" class="alternativas">B - Marte.</p>
                                                                    <p style="top: 60%;" class="alternativas">C - Mercúrio.</p>
                                                                
                                                                    <button onclick="correto()" class="botaoA" style="left: 8%;">A</button>
                                                                    <button onclick="errado()" class="botaoA" style="left: 40%;">B</button>
                                                                    <button onclick="errado()" class="botaoA" style="left: 72%;">C</button>
                                                                </div>`);

                return;
            }

            if (sorteioP == 9) {
                document.body.insertAdjacentHTML("beforeend", `<div id="pergunta" class="pergunta">
                <p class="w-100 p-3 bg-primary text-center perguntaTitulo">Pergunta para o jogador ${jogador}</p>
            
                <p class="linha1">Qual dos seguintes cientistas trabalhou com Johannes Kepler e contribuiu para a compreensão das leis do movimento planetário?</p>
            
                <p style="top: 32%;" class="alternativas">A - Copérnico.</p>
                <p style="top: 49%;" class="alternativas">B - Albert Einstein.</p>
                <p style="top: 67%;" class="alternativas">C - Galileu Galilei.</p>
            
                <button onclick="errado()" class="botaoA" style="left: 8%;">A</button>
                <button onclick="errado()" class="botaoA" style="left: 40%;">B</button>
                <button onclick="correto()" class="botaoA" style="left: 72%;">C</button>
            </div>`);

                return;
            }
        }

        jogador = "J1";

        document.getElementById("vez").innerHTML = `Vez de: ${jogador}`;
    }
}

function jogarNovamente() {
    window.location.reload();
}

function menu(){
    window.location.href = `index.html`
}