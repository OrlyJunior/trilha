var jogador = "J1";

var block1 = false;

var block1 = false;

var block2 = false;

var block3 = false;

var block4 = false;

var pJ1 = 0;

var pJ2 = 0;

var pJ3 = 0;

var pJ4 = 0;

var pAtual1 = "";

var pAtual2 = "";

var pAtual3 = "";

var pAtual4 = "";

var j1P1 = false;

var j1P2 = false;

var j1P3 = true;

var j2P1 = false;

var j2P2 = false;

var j2P3 = false;

var j3P1 = false;

var j3P2 = false;

var j3P3 = false;

var j4P1 = false;

var j4P2 = false;

var j4P3 = false;

var poderes = ["Fora de Órbita", "Um Ano em Mercúrio", "Um Ano em Plutão"];

document.getElementById("vez").innerHTML = `Vez de: ${jogador}`;

var tabLength = document.querySelectorAll("div").length - 1;

function correto() {
    var poder = Math.floor(Math.random() * 3);

    document.getElementById("pergunta").remove();

    document.body.insertAdjacentHTML("beforeend", `<div id="janela" style="height: 40%" class="pergunta">
                                                            <p class="perguntaTitulo bg-light w-100 p-3 text-center">Você acertou!</p>
                                                            <p style="display: flex; position: absolute; top: 35%;">Você ganhou o poder ${poderes[poder]}!</p>

                                                            <button onclick="continuar()" style="border-radius: 12px; position: absolute; top: 55%;">Continuar</button>
                                                    </div>`);

    if (jogador == "J1") {
        if (j2P1 == true) {
            document.body.insertAdjacentHTML("beforeend", `<div id="fora" onclick="foraOrbita()" class="poder"><div class="poder2"><img src="Imagens/645410.png" width="85%"></div></div>`);
        }

        if (j2P2 == true) {
            document.body.insertAdjacentHTML("beforeend", `<div id="mercurio" onclick="mercurio()" class="poder"><div class="poder2"><img src="Imagens/mercurio_318-881959.png" width="85%"></div></div>`);
        }

        if (j2P3 == true) {
            document.body.insertAdjacentHTML("beforeend", `<div id="plutao" onclick="plutao" class="poder"><div class="poder2"><img src="Imagens/pngtree-pluto-line-icon-vector-png-image_6640934.png" width="85%"></div></div>`)
        }
    }

    if (jogador == "J2") {
        if (j3P1 == true) {
            document.body.insertAdjacentHTML("beforeend", `<div id="fora" onclick="foraOrbita()" class="poder"><div class="poder2"><img src="Imagens/645410.png" width="85%"></div></div>`);
        }

        if (j3P2 == true) {
            document.body.insertAdjacentHTML("beforeend", `<div id="mercurio" onclick="mercurio()" class="poder"><div class="poder2"><img src="Imagens/mercurio_318-881959.png" width="85%"></div></div>`);
        }

        if (j3P3 == true) {
            document.body.insertAdjacentHTML("beforeend", `<div id="plutao" onclick="plutao" class="poder"><div class="poder2"><img src="Imagens/pngtree-pluto-line-icon-vector-png-image_6640934.png" width="85%"></div></div>`)
        }
    }

    if (jogador == "J3") {
        if (j4P1 == true) {
            document.body.insertAdjacentHTML("beforeend", `<div id="fora" onclick="foraOrbita()" class="poder"><div class="poder2"><img src="Imagens/645410.png" width="85%"></div></div>`);
        }

        if (j4P2 == true) {
            document.body.insertAdjacentHTML("beforeend", `<div id="mercurio" onclick="mercurio()" class="poder"><div class="poder2"><img src="Imagens/mercurio_318-881959.png" width="85%"></div></div>`);
        }

        if (j4P3 == true) {
            document.body.insertAdjacentHTML("beforeend", `<div id="plutao" onclick="plutao" class="poder"><div class="poder2"><img src="Imagens/pngtree-pluto-line-icon-vector-png-image_6640934.png" width="85%"></div></div>`)
        }

        if (jogador == "J4") {
            if (j1P1 == true) {
                document.body.insertAdjacentHTML("beforeend", `<div id="fora" onclick="foraOrbita()" class="poder"><div class="poder2"><img src="Imagens/645410.png" width="85%"></div></div>`);
            }

            if (j1P2 == true) {
                document.body.insertAdjacentHTML("beforeend", `<div id="mercurio" onclick="mercurio()" class="poder"><div class="poder2"><img src="Imagens/mercurio_318-881959.png" width="85%"></div></div>`);
            }

            if (j1P3 == true) {
                document.body.insertAdjacentHTML("beforeend", `<div id="plutao" onclick="plutao" class="poder"><div class="poder2"><img src="Imagens/pngtree-pluto-line-icon-vector-png-image_6640934.png" width="85%"></div></div>`)
            }
        }

        if (poderes[poder] == "Fora de Órbita" && jogador == "J1") {
            j1P1 = true;
            jogador = "J2";
            document.getElementById("vez").innerHTML = `Vez de: ${jogador}`;
            return;
        }

        if (poderes[poder] == "Um Ano em Mercúrio" && jogador == "J1") {
            j1P2 = true;
            jogador = "J2";
            document.getElementById("vez").innerHTML = `Vez de: ${jogador}`;
            return;
        }

        if (poderes[poder] == "Um Ano em Plutão" && jogador == "J1") {
            j1P3 = true;
            jogador = "J2";
            document.getElementById("vez").innerHTML = `Vez de: ${jogador}`;
            return;
        }

        if (poderes[poder] == "Fora de Órbita" && jogador == "J2") {
            j2P1 = true;
            jogador = "J3";
            document.getElementById("vez").innerHTML = `Vez de: ${jogador}`;
            return;
        }

        if (poderes[poder] == "Um Ano em Mercúrio" && jogador == "J2") {
            j2P2 = true;
            jogador = "J3";
            document.getElementById("vez").innerHTML = `Vez de: ${jogador}`;
            return;
        }

        if (poderes[poder] == "Um Ano em Plutão" && jogador == "J2") {
            j2P3 = true;
            jogador = "J3";
            document.getElementById("vez").innerHTML = `Vez de: ${jogador}`;
            return;
        }

        if (poderes[poder] == "Fora de Órbita" && jogador == "J3") {
            j3P1 = true;
            jogador = "J4";
            document.getElementById("vez").innerHTML = `Vez de: ${jogador}`;
            return;
        }

        if (poderes[poder] == "Um Ano em Mercúrio" && jogador == "J3") {
            j3P2 = true;
            jogador = "J4";
            document.getElementById("vez").innerHTML = `Vez de: ${jogador}`;
            return;
        }

        if (poderes[poder] == "Um Ano em Plutão" && jogador == "J3") {
            j3P3 = true;
            jogador = "J4";
            document.getElementById("vez").innerHTML = `Vez de: ${jogador}`;
            return;
        }

        if (poderes[poder] == "Fora de Órbita" && jogador == "J4") {
            j4P1 = true;
            jogador = "J1";
            document.getElementById("vez").innerHTML = `Vez de: ${jogador}`;
            return;
        }

        if (poderes[poder] == "Um Ano em Mercúrio" && jogador == "J4") {
            j4P2 = true;
            jogador = "J1";
            document.getElementById("vez").innerHTML = `Vez de: ${jogador}`;
            return;
        }

        if (poderes[poder] == "Um Ano em Plutão" && jogador == "J4") {
            j4P3 = true;
            jogador = "J1";
            document.getElementById("vez").innerHTML = `Vez de: ${jogador}`;
            return;
        }
    }
}

function continuar() {
    document.getElementById("janela").remove();

    if (jogador == "J1") {
        if (j2P1 == true) {
            document.body.insertAdjacentHTML("beforeend", `<div id="fora" onclick="foraOrbita()" class="poder"><div class="poder2"><img src="Imagens/645410.png" width="85%"></div></div>`);
        }

        if (j2P2 == true) {
            document.body.insertAdjacentHTML("beforeend", `<div id="mercurio" onclick="mercurio()" class="poder"><div class="poder2"><img src="Imagens/mercurio_318-881959.png" width="85%"></div></div>`);
        }

        if (j2P3 == true) {
            document.body.insertAdjacentHTML("beforeend", `<div id="plutao" onclick="plutao" class="poder"><div class="poder2"><img src="Imagens/pngtree-pluto-line-icon-vector-png-image_6640934.png" width="85%"></div></div>`)
        }

        jogador = "J2";

        document.getElementById("vez").innerHTML = `Vez de: ${jogador}`;
    }

    if (jogador == "J2") {
        if (j3P1 == true) {
            document.body.insertAdjacentHTML("beforeend", `<div id="fora" onclick="foraOrbita()" class="poder"><div class="poder2"><img src="Imagens/645410.png" width="85%"></div></div>`);
        }

        if (j3P2 == true) {
            document.body.insertAdjacentHTML("beforeend", `<div id="mercurio" onclick="mercurio()" class="poder"><div class="poder2"><img src="Imagens/mercurio_318-881959.png" width="85%"></div></div>`);
        }

        if (j3P3 == true) {
            document.body.insertAdjacentHTML("beforeend", `<div id="plutao" onclick="plutao" class="poder"><div class="poder2"><img src="Imagens/pngtree-pluto-line-icon-vector-png-image_6640934.png" width="85%"></div></div>`)
        }

        jogador = "J3";

        document.getElementById("vez").innerHTML = `Vez de: ${jogador}`;
    }

    if (jogador == "J3") {
        if (j4P1 == true) {
            document.body.insertAdjacentHTML("beforeend", `<div id="fora" onclick="foraOrbita()" class="poder"><div class="poder2"><img src="Imagens/645410.png" width="85%"></div></div>`);
        }

        if (j4P2 == true) {
            document.body.insertAdjacentHTML("beforeend", `<div id="mercurio" onclick="mercurio()" class="poder"><div class="poder2"><img src="Imagens/mercurio_318-881959.png" width="85%"></div></div>`);
        }

        if (j4P3 == true) {
            document.body.insertAdjacentHTML("beforeend", `<div id="plutao" onclick="plutao" class="poder"><div class="poder2"><img src="Imagens/pngtree-pluto-line-icon-vector-png-image_6640934.png" width="85%"></div></div>`)
        }

        jogador = "J4";

        document.getElementById("vez").innerHTML = `Vez de: ${jogador}`;
    }

    if (jogador == "J4") {
        if (j1P1 == true) {
            document.body.insertAdjacentHTML("beforeend", `<div id="fora" onclick="foraOrbita()" class="poder"><div class="poder2"><img src="Imagens/645410.png" width="85%"></div></div>`);
        }

        if (j1P2 == true) {
            document.body.insertAdjacentHTML("beforeend", `<div id="mercurio" onclick="mercurio()" class="poder"><div class="poder2"><img src="Imagens/mercurio_318-881959.png" width="85%"></div></div>`);
        }

        if (j1P3 == true) {
            document.body.insertAdjacentHTML("beforeend", `<div id="plutao" onclick="plutao" class="poder"><div class="poder2"><img src="Imagens/pngtree-pluto-line-icon-vector-png-image_6640934.png" width="85%"></div></div>`)
        }

        jogador = "J1";

        document.getElementById("vez").innerHTML = `Vez de: ${jogador}`;
    }
}

function errado() {
    document.getElementById("pergunta").remove();

    document.body.insertAdjacentHTML("beforeend", `<div id="janela" style="height: 40%" class="pergunta">
                                                            <p class="perguntaTitulo bg-light w-100 p-3 text-center">Você errou!</p>
                                                            <p style="display: flex; position: absolute; top: 35%;">Você perdeu a chance de ganhar um poder!</p>

                                                            <button onclick="continuar()" style="border-radius: 12px; position: absolute; top: 55%;">Continuar</button>
                                                        </div>`);

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

function dado() {
    console.log(block1);

    var resultado = Math.floor(Math.random() * 6);
    if (resultado == 0) {
        resultado = resultado + 1;
    }

    if (jogador == "J1") {
        if (block1 == true) {
            document.body.insertAdjacentHTML("beforeend", `<div style="height: 35%; top: 30%;" id="janela" class="pergunta">
                                                                <p class="w-100 p-3 bg-primary text-center perguntaTitulo">O jogador J1 está bloqueado!</p>
                                                        
                                                                <button onclick="continuar()" style="position: absolute; border-radius: 30px; width: 30%; left: 36%; top: 45%;">Continuar</button>
                                                            </div>`);

            block1 = false;

            return;
        }

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

            return;
        }

        jogador = "J2";

        document.getElementById("vez").innerHTML = `Vez de: ${jogador}`;
    } else if (jogador == "J2") {
        if (block2 == true) {
            document.body.insertAdjacentHTML("beforeend", `<div style="height: 35%; top: 30%;" id="janela" class="pergunta">
                                                                <p class="w-100 p-3 bg-primary text-center perguntaTitulo">O jogador J2 está bloqueado!</p>
                                                        
                                                                <button onclick="continuar()" style="position: absolute; border-radius: 30px; width: 30%; left: 36%; top: 45%;">Continuar</button>
                                                            </div>`);

            block2 = false;

            return;
        }

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

        if (document.getElementById("fora")) {
            document.getElementById("fora").remove();
        }

        if (document.getElementById("mercurio")) {
            document.getElementById("mercurio").remove();
        }

        if (document.getElementById("plutao")) {
            document.getElementById("plutao").remove();
        }

        if (j3P1 == true) {
            document.body.insertAdjacentHTML("beforeend", `<div id="fora" onclick="foraOrbita()" class="poder"><div class="poder2"><img src="Imagens/645410.png" width="85%"></div></div>`);
        }

        if (j3P2 == true) {
            document.body.insertAdjacentHTML("beforeend", `<div id="mercurio" onclick="mercurio()" class="poder"><div class="poder2"><img src="Imagens/mercurio_318-881959.png" width="85%"></div></div>`);
        }

        if (j3P3 == true) {
            document.body.insertAdjacentHTML("beforeend", `<div id="plutao" onclick="plutao()" class="poder"><div class="poder2"><img src="Imagens/pngtree-pluto-line-icon-vector-png-image_6640934.png" width="85%"></div></div>`)
        }

        if (document.getElementById("p2J1")) {
            document.getElementById("p2J1").remove();
        }

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

            return;
        }

        jogador = "J3";

        document.getElementById("vez").innerHTML = `Vez de: ${jogador}`;
    }

    else if (jogador == "J3") {
        if (block3 == true) {
            document.body.insertAdjacentHTML("beforeend", `<div style="height: 35%; top: 30%;" id="janela" class="pergunta">
                                                                <p class="w-100 p-3 bg-primary text-center perguntaTitulo">O jogador J2 está bloqueado!</p>
                                                        
                                                                <button onclick="continuar()" style="position: absolute; border-radius: 30px; width: 30%; left: 36%; top: 45%;">Continuar</button>
                                                            </div>`);

            block3 = false;

            return;
        }

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

        if (document.getElementById("fora")) {
            document.getElementById("fora").remove();
        }

        if (document.getElementById("mercurio")) {
            document.getElementById("mercurio").remove();
        }

        if (document.getElementById("plutao")) {
            document.getElementById("plutao").remove();
        }

        if (j4P1 == true) {
            document.body.insertAdjacentHTML("beforeend", `<div id="fora" onclick="foraOrbita()" class="poder"><div class="poder2"><img src="Imagens/645410.png" width="85%"></div></div>`);
        }

        if (j4P2 == true) {
            document.body.insertAdjacentHTML("beforeend", `<div id="mercurio" onclick="mercurio()" class="poder"><div class="poder2"><img src="Imagens/mercurio_318-881959.png" width="85%"></div></div>`);
        }

        if (j4P3 == true) {
            document.body.insertAdjacentHTML("beforeend", `<div id="plutao" onclick="plutao()" class="poder"><div class="poder2"><img src="Imagens/pngtree-pluto-line-icon-vector-png-image_6640934.png" width="85%"></div></div>`)
        }

        if (document.getElementById("p3J1")) {
            document.getElementById("p3J1").remove();
        }

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

            return;
        }

        jogador = "J4";

        document.getElementById("vez").innerHTML = `Vez de: ${jogador}`;
    } else if (jogador == "J4") {
        if (block4 == true) {
            document.body.insertAdjacentHTML("beforeend", `<div style="height: 35%; top: 30%;" id="janela" class="pergunta">
                                                                <p class="w-100 p-3 bg-primary text-center perguntaTitulo">O jogador J2 está bloqueado!</p>
                                                        
                                                                <button onclick="continuar()" style="position: absolute; border-radius: 30px; width: 30%; left: 36%; top: 45%;">Continuar</button>
                                                            </div>`);

            block4 = false;

            return;
        }

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

        document.getElementsByTagName("div")[pJ4 + 1].innerHTML += ` <p class="p-2 text-warning">${jogador}</p> `;


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

            return;
        }


        jogador = "J1";

        document.getElementById("vez").innerHTML = `Vez de: ${jogador}`;

        if (document.getElementById("fora")) {
            document.getElementById("fora").remove();
        }

        if (document.getElementById("mercurio")) {
            document.getElementById("mercurio").remove();
        }

        if (document.getElementById("plutao")) {
            document.getElementById("plutao").remove();
        }

        if (j1P1 == true) {
            document.body.insertAdjacentHTML("beforeend", `<div id="fora" onclick="foraOrbita()" class="poder"><div class="poder2"><img src="Imagens/645410.png" width="85%"></div></div>`);
        }

        if (j1P2 == true) {
            document.body.insertAdjacentHTML("beforeend", `<div id="mercurio" onclick="mercurio()" class="poder"><div class="poder2"><img src="Imagens/mercurio_318-881959.png" width="85%"></div></div>`);
        }

        if (j1P3 == true) {
            document.body.insertAdjacentHTML("beforeend", `<div id="plutao" onclick="plutao()" class="poder"><div class="poder2"><img src="Imagens/pngtree-pluto-line-icon-vector-png-image_6640934.png" width="85%"></div></div>`)
        }

        if (document.getElementById("p4J1")) {
            document.getElementById("p4J1").remove();
        }

        jogador = "J1";

        document.getElementById("vez").innerHTML = `Vez de: ${jogador}`;
    }
}

function volta(player) {
    console.log(player.innerHTML)

    if (player.innerHTML == "J1") {
        if (document.getElementsByTagName("p")[1].innerHTML == player.innerHTML) {
            pAtual1 = document.getElementsByTagName("p")[1];
        } else if (document.getElementsByTagName("p")[2].innerHTML == player.innerHTML) {
            pAtual1 = document.getElementsByTagName("p")[2];
        } else if (document.getElementsByTagName("p")[3].innerHTML == player.innerHTML) {
            pAtual1 = document.getElementsByTagName("p")[3];
        } else {
            pAtual1 = document.getElementsByTagName("p")[0];
        }

        pAtual1.remove();


        pJ1 = (pJ1 - 3) % tabLength;

        if (!document.getElementsByTagName("div")[pJ1 + 1]) {
            document.getElementsByTagName("div")[1].innerHTML += ` <p class="p-2 text-success">${player.innerHTML}</p> `;
        } else {
            document.getElementsByTagName("div")[pJ1 + 1].innerHTML += ` <p class="p-2 text-success">${player.innerHTML}</p> `;
        }

        document.getElementById("volta").remove();
    }

    if (player.innerHTML == "J2") {
        if (document.getElementsByTagName("p")[1].innerHTML == player.innerHTML) {
            pAtual2 = document.getElementsByTagName("p")[1];
        } else if (document.getElementsByTagName("p")[2].innerHTML == player.innerHTML) {
            pAtual2 = document.getElementsByTagName("p")[2];
        } else if (document.getElementsByTagName("p")[3].innerHTML == player.innerHTML) {
            pAtual2 = document.getElementsByTagName("p")[3];
        } else {
            pAtual2 = document.getElementsByTagName("p")[0];
        }

        pAtual2.remove();

        pJ2 = (pJ2 - 3) % tabLength;

        if (!document.getElementsByTagName("div")[pJ2 + 1]) {
            document.getElementsByTagName("div")[1].innerHTML += ` <p class="p-2 text-primary">${player.innerHTML}</p> `;
        } else {
            document.getElementsByTagName("div")[pJ2 + 1].innerHTML += ` <p class="p-2 text-primary">${player.innerHTML}</p> `;
        }

        document.getElementById("volta").remove();
    }

    if (player.innerHTML == "J3") {
        if (document.getElementsByTagName("p")[1].innerHTML == player.innerHTML) {
            pAtual3 = document.getElementsByTagName("p")[1];
        } else if (document.getElementsByTagName("p")[2].innerHTML == player.innerHTML) {
            pAtual3 = document.getElementsByTagName("p")[2];
        } else if (document.getElementsByTagName("p")[3].innerHTML == player.innerHTML) {
            pAtual3 = document.getElementsByTagName("p")[3];
        } else {
            pAtual3 = document.getElementsByTagName("p")[0];
        }

        pAtual3.remove();

        pJ3 = (pJ3 - 3) % tabLength;

        if (!document.getElementsByTagName("div")[pJ3 + 1]) {
            document.getElementsByTagName("div")[1].innerHTML += ` <p class="p-2 text-danger">${player.innerHTML}</p> `;
        } else {
            document.getElementsByTagName("div")[pJ3 + 1].innerHTML += ` <p class="p-2 text-danger">${player.innerHTML}</p> `;
        }

        document.getElementById("volta").remove();
    }

    if (player.innerHTML == "J4") {
        if (document.getElementsByTagName("p")[1].innerHTML == player.innerHTML) {
            pAtual4 = document.getElementsByTagName("p")[1];
        } else if (document.getElementsByTagName("p")[2].innerHTML == player.innerHTML) {
            pAtual4 = document.getElementsByTagName("p")[2];
        } else if (document.getElementsByTagName("p")[3].innerHTML == player.innerHTML) {
            pAtual4 = document.getElementsByTagName("p")[3];
        } else {
            pAtual4 = document.getElementsByTagName("p")[0];
        }

        pAtual4.remove();

        pJ4 = (pJ4 - 3) % tabLength;

        if (!document.getElementsByTagName("div")[pJ4 + 1]) {
            document.getElementsByTagName("div")[1].innerHTML += ` <p class="p-2 text-warning">${player.innerHTML}</p> `;
        } else {
            document.getElementsByTagName("div")[pJ4 + 1].innerHTML += ` <p class="p-2 text-warning">${player.innerHTML}</p> `;
        }

        document.getElementById("volta").remove();
    }
}

function foraOrbita() {
    if (jogador == "J1") {
        document.body.insertAdjacentHTML("beforeend", `<div id="volta" style="height: 30%; top: 25%;" class="pergunta">
                                                        <p class="w-100 p-3 bg-primary text-center perguntaTitulo">Qual jogador você deseja mandar para trás?</p>

                                                        <button onclick="volta(this)" style="position: absolute; border-radius: 50px; width: 10%; left: 15%; top: 45%;">J2</button>
                                                        <button onclick="volta(this)" style="position: absolute; border-radius: 30px; width: 10%;  left: 45%; top: 45%;">J3</button>
                                                        <button onclick="volta(this)" style="position: absolute; border-radius: 30px; width: 10%; left: 75%; top: 45%;">J4</button>
                                                    </div>`);

        j1P1 = false;

        document.getElementById("fora").remove();

        return;
    }

    if (jogador == "J2") {
        document.body.insertAdjacentHTML("beforeend", `<div id="volta" style="height: 30%; top: 25%;" class="pergunta">
                                                        <p class="w-100 p-3 bg-primary text-center perguntaTitulo">Qual jogador você deseja mandar para trás?</p>

                                                        <button onclick="volta(this)" style="position: absolute; border-radius: 50px; width: 10%; left: 15%; top: 45%;">J1</button>
                                                        <button onclick="volta(this)" style="position: absolute; border-radius: 30px; width: 10%;  left: 45%; top: 45%;">J3</button>
                                                        <button onclick="volta(this)" style="position: absolute; border-radius: 30px; width: 10%; left: 75%; top: 45%;">J4</button>
                                                    </div>`);

        j2P1 = false;

        document.getElementById("fora").remove();

        return;
    }

    if (jogador == "J3") {
        document.body.insertAdjacentHTML("beforeend", `<div id="volta" style="height: 30%; top: 25%;" class="pergunta">
                                                        <p class="w-100 p-3 bg-primary text-center perguntaTitulo">Qual jogador você deseja mandar para trás?</p>

                                                        <button onclick="volta(this)" style="position: absolute; border-radius: 50px; width: 10%; left: 15%; top: 45%;">J1</button>
                                                        <button onclick="volta(this)" style="position: absolute; border-radius: 30px; width: 10%;  left: 45%; top: 45%;">J2</button>
                                                        <button onclick="volta(this)" style="position: absolute; border-radius: 30px; width: 10%; left: 75%; top: 45%;">J4</button>
                                                    </div>`);

        j3P1 = false;

        document.getElementById("fora").remove();

        return;
    }

    if (jogador == "J4") {
        document.body.insertAdjacentHTML("beforeend", `<div id="volta" style="height: 30%; top: 25%;" class="pergunta">
                                                        <p class="w-100 p-3 bg-primary text-center perguntaTitulo">Qual jogador você deseja mandar para trás?</p>

                                                        <button onclick="volta(this)" style="position: absolute; border-radius: 50px; width: 10%; left: 15%; top: 45%;">J1</button>
                                                        <button onclick="volta(this)" style="position: absolute; border-radius: 30px; width: 10%;  left: 45%; top: 45%;">J2</button>
                                                        <button onclick="volta(this)" style="position: absolute; border-radius: 30px; width: 10%; left: 75%; top: 45%;">J3</button>
                                                    </div>`);

        j4P1 = false;

        document.getElementById("fora").remove();

        return;
    }
}

function mercurio() {
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

        document.getElementsByTagName("div")[pJ1 + 1].innerHTML += ` <p class="p-2 text-success">${jogador}</p> `;

        j1P2 = false;

        document.getElementById("mercurio").remove();

        jogador = "J2";

        document.getElementById("vez").innerHTML = `Vez de: ${jogador}`;

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

        document.getElementsByTagName("div")[pJ2 + 1].innerHTML += ` <p class="p-2 text-primary">${jogador}</p> `;

        j2P2 = false;

        jogador = "J3";

        document.getElementById("vez").innerHTML = `Vez de: ${jogador}`;

        document.getElementById("mercurio").remove();

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

        document.getElementsByTagName("div")[pJ3 + 1].innerHTML += ` <p class="p-2 text-danger">${jogador}</p> `;

        j3P2 = false;

        jogador = "J4";

        document.getElementById("vez").innerHTML = `Vez de: ${jogador}`;

        document.getElementById("mercurio").remove();

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

        document.getElementsByTagName("div")[pJ4 + 1].innerHTML += ` <p class="p-2 text-warning">${jogador}</p> `;

        j4P2 = false;

        jogador = "J1";

        document.getElementById("vez").innerHTML = `Vez de: ${jogador}`;

        document.getElementById("mercurio").remove();

        return;
    }
}

function plutao() {
    if (jogador == "J1") {
        document.body.insertAdjacentHTML("beforeend", `<div id="volta" style="height: 30%; top: 25%;" class="pergunta">
                                                        <p class="w-100 p-3 bg-primary text-center perguntaTitulo">Qual jogador você deseja que fique uma rodada sem jogar?</p>

                                                        <button onclick="bloqueia(this)" style="position: absolute; border-radius: 50px; width: 10%; left: 15%; top: 45%;">J2</button>
                                                        <button onclick="bloqueia(this)" style="position: absolute; border-radius: 30px; width: 10%;  left: 45%; top: 45%;">J3</button>
                                                        <button onclick="bloqueia(this)" style="position: absolute; border-radius: 30px; width: 10%; left: 75%; top: 45%;">J4</button>
                                                      </div>`);

        j1P3 = false;

        document.getElementById("plutao").remove();

        return;
    }

    if (jogador == "J2") {
        document.body.insertAdjacentHTML("beforeend", `<div id="volta" style="height: 30%; top: 25%;" class="pergunta">
                                                        <p class="w-100 p-3 bg-primary text-center perguntaTitulo">Qual jogador você deseja que fique uma rodada sem jogar?</p>

                                                        <button onclick="bloqueia(this)" style="position: absolute; border-radius: 50px; width: 10%; left: 15%; top: 45%;">J1</button>
                                                        <button onclick="bloqueia(this)" style="position: absolute; border-radius: 30px; width: 10%;  left: 45%; top: 45%;">J3</button>
                                                        <button onclick="bloqueia(this)" style="position: absolute; border-radius: 30px; width: 10%; left: 75%; top: 45%;">J4</button>
                                                      </div>`);

        j2P3 = false;

        document.getElementById("plutao").remove();

        return;
    }

    if (jogador == "J3") {
        document.body.insertAdjacentHTML("beforeend", `<div id="volta" style="height: 30%; top: 25%;" class="pergunta">
                                                        <p class="w-100 p-3 bg-primary text-center perguntaTitulo">Qual jogador você deseja que fique uma rodada sem jogar?</p>

                                                        <button onclick="bloqueia(this)" style="position: absolute; border-radius: 50px; width: 10%; left: 15%; top: 45%;">J1</button>
                                                        <button onclick="bloqueia(this)" style="position: absolute; border-radius: 30px; width: 10%;  left: 45%; top: 45%;">J2</button>
                                                        <button onclick="bloqueia(this)" style="position: absolute; border-radius: 30px; width: 10%; left: 75%; top: 45%;">J4</button>
                                                      </div>`);

        j3P3 = false;

        document.getElementById("plutao").remove();

        return;
    }

    if (jogador == "J4") {
        document.body.insertAdjacentHTML("beforeend", `<div id="volta" style="height: 30%; top: 25%;" class="pergunta">
                                                        <p class="w-100 p-3 bg-primary text-center perguntaTitulo">Qual jogador você deseja que fique uma rodada sem jogar?</p>

                                                        <button onclick="bloqueia(this)" style="position: absolute; border-radius: 50px; width: 10%; left: 15%; top: 45%;">J1</button>
                                                        <button onclick="bloqueia(this)" style="position: absolute; border-radius: 30px; width: 10%;  left: 45%; top: 45%;">J2</button>
                                                        <button onclick="bloqueia(this)" style="position: absolute; border-radius: 30px; width: 10%; left: 75%; top: 45%;">J3</button>
                                                    </div>`);

        j4P3 = false;

        document.getElementById("plutao").remove();

        return;
    }
}

function bloqueia(player) {
    console.log(player.innerHTML)

    if (player.innerHTML == "J1") {
        block1 = true;
    }

    if (player.innerHTML == "J2") {
        block2 = true;
    }

    if (player.innerHTML == "J3") {
        block3 = true;
    }

    if (player.innerHTML == "J4") {
        block4 = true;
    }
}