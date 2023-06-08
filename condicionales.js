//CÓMO ANIDAR CONDICIONALES AL PROGRAMAR
if (condicion1){
    // Bloque 1
 } else if (condicion2){
     // Bloque 2
 } else if (condicion3){
    // Bloque 3
 } else {
     // Bloque else
 }

//OPERADOR CONDICIONAL TERNARIO 
function esPar(numero){
    return numero % 2 === 0 ? "Es par" : "No es par"
}

console.log(esPar(2)) // "Es par"
console.log(esPar(3)) // "No es par"


//EJEMPLO DEL JUEGO "PIEDRA, PAPEL O TIJER" USANDO IF 
let op1 = "Piedra";  
let op2 = "Papel";
let op3 = "Tijera";

let opcionesMaquina = ["Piedra", "Papel", "Tijera"];
let maquina = opcionesMaquina[Math.floor(Math.random() * 3)]; 
console.log(maquina);

function game(miJuego) {

    if (miJuego === maquina) {
        return "Es un Empate";
    }else if (miJuego === op1 && maquina === op3) {
        return "Haz Ganado";
    }else if(miJuego === op2 && maquina === op1){
        return "Haz Ganado";
    }else if (miJuego === op3 && maquina === op2) {
        return "Haz Ganado";
    }
    else {
        return "Haz Perdido";
    }
}
let resultado = game(op1);
console.log(resultado);