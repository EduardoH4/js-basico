//COMO UTILIZAR EL CONDICIONAL SWITCH
switch (expresion) {
    case 1: {
      // Bloque 1
      break
    }
    case 2: {
     // Bloque 2
      break
    }
    default: {
      // Bloque por defecto
    }
  }


//EJEMPLO DEL JUEGO "PIEDRA, PAPEL O TIJER" USANDO SWITCH 
let op1 = "Piedra";  
let op2 = "Papel";
let op3 = "Tijera";

let opcionesMaquina = ["Piedra", "Papel", "Tijera"];
let maquina = opcionesMaquina[Math.floor(Math.random() * 3)]; 
console.log(maquina);

function game(miJuego) {

    switch (true) { //Si la condicion es "true" los casos van a pasar 
        case miJuego === maquina: {
            console.log("Es un Empate");
            break;
        }
        case miJuego === op1 && maquina === op3:{
            console.log("Haz Ganado");
            break;
        }
        case miJuego === op2 && maquina ===op1:{
            console.log("Haz Ganado");
            break;
        }
        case miJuego === op3 && maquina ===op2:{
            console.log("Haz Ganado");
        }
        default:{ 
           console.log("Haz Perdido");
            break;
        }
    }
}
 game(op1);
