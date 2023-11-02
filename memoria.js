var cartas = ["Periélio", "Afélio", "1º Lei de Kepler", "2º Lei de Kepler", "3º Lei de Kepler", "Órbita", "Planeta", "Kepler", "Lei das Áreas", "Lei das Órbitas Elípticas", "Lei dos Períodos", "Planetas", "Periélio", "Afélio", "1º Lei de Kepler", "2º Lei de Kepler", "3º Lei de Kepler", "Órbita", "Planeta", "Kepler", "Lei das Áreas", "Lei das Órbitas Elípticas", "Lei dos Períodos", "Planetas"];

var vezes = 24;

randomizar();

function randomizar() {
    for (var i = 0; i < 24; i++) {
        var random = Math.floor(Math.random() * vezes);

        if(random == 0){
            random++;
        }

        console.log(random)

        if(random == i){
            random = random + 1;
        }

        if(random > cartas.length){
            random--;
        }

        if(cartas.length == 1){
            random = 0;
        }

        var carta = document.getElementsByClassName("carta")[i];

        carta.innerHTML = cartas[random];

        cartas.splice(random, 1);
        
        vezes--;
    }
}