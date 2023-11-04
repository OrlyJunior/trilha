var cartas = ["<p class='hidden'>Periélio</p>", "<p class='hidden'>Afélio</p>", "<p class='hidden'>1º Lei de Kepler</p>", "<p class='hidden'>2º Lei de Kepler</p>", "<p class='hidden'>3º Lei de Kepler</p>", "<p class='hidden'>Órbita</p>", "<p class='hidden'>Planeta</p>", "<p class='hidden'>Kepler</p>", "<p class='hidden'>Lei das Áreas</p>", "<p class='hidden'>Lei das Órbitas Elípticas</p>", "<p class='hidden'>Lei dos Períodos</p>", "<p class='hidden'>Planetas</p>", "<p class='hidden'>Periélio</p>", "<p class='hidden'>Afélio</p>", "<p class='hidden'>1º Lei de Kepler</p>", "<p class='hidden'>2º Lei de Kepler</p>", "<p class='hidden'>3º Lei de Kepler</p>", "<p class='hidden'>Órbita</p>", "<p class='hidden'>Planeta</p>", "<p class='hidden'>Kepler</p>", "<p class='hidden'>Lei das Áreas</p>", "<p class='hidden'>Lei das Órbitas Elípticas</p>", "<p class='hidden'>Lei dos Períodos</p>", "<p class='hidden'>Planetas</p>"];

var clique1 = "";
var clique2 = "";

var p1 = "";
var p2 = "";

var corretas = 0;

var vezes = 24;

randomizar();

function randomizar() {
    for (var i = 0; i < 24; i++) {
        var random = Math.floor(Math.random() * vezes);

        if (random == 0) {
            random++;
        }

        if (random == i) {
            random = random + 1;
        }

        if (random > cartas.length) {
            random--;
        }

        if (cartas.length == 1) {
            random = 0;
        }

        carta

        var carta = document.getElementsByClassName("carta")[i];

        carta.innerHTML = cartas[random];

        cartas.splice(random, 1);

        vezes--;
    }
}


function clique(carta) {
    if(p1.innerHTML != p2.innerHTML && p2 != ""){
        p1.classList.add("hidden");
        p2.classList.add("hidden");
        
        p1 = "";
        p2 = "";
    }

    if(p1 != "" && p2 != ""){
        p1 = "";
        p2 = "";

        corretas++;

        if(corretas == 12){
            document.body.insertAdjacentHTML("beforeend", `<div onclick="jogarNovamente()" class="vitoria">
                                                                <p>Jogar novamente?</p>
                                                            </div>`);
        }
    }

    if(p1 == ""){
        for (let i = 0; i < 25; i++) {
            if(document.getElementsByClassName("carta")[i] == carta){
                p1 = document.getElementsByTagName("p")[i];
            }
        }

        p1.classList.remove("hidden");
    }else{
        for (let i = 0; i < 25; i++) {
            if(document.getElementsByClassName("carta")[i] == carta){
                p2 = document.getElementsByTagName("p")[i];
            }
        }
        
        p2.classList.remove("hidden");
    }
}

function jogarNovamente(){
    window.location.reload();
}