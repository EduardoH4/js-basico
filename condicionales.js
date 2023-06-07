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


//EJEMPLO DEL EJERCICIO DEL JUEGO USANDO IF 
let op1 = "Piedra";  
let op2 = "Papel";
let op3 = "Tijera";

function game(miJuego) {
    let maquina = parseInt(Math.random()*3)+1; //1 piedra, 2 papel, 3 tijera.
    console.log(maquina);

    if (miJuego === op1 && maquina === 1 || miJuego === op2 && maquina === 2 || miJuego === op3 && maquina === 3) {
        return "Es un Empate";
    }else if (miJuego === op1 && maquina === 3 || miJuego === op2 && maquina === 1 || miJuego === op3 && maquina === 2) {
        return "Haz Ganado";
    }else {
        return "Haz Perdido";
    }
}


let resultado = game(op1);
console.log(resultado);