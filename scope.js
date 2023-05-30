//SCOPE GLOBAL 
var nombre = "JavaScript"

function saludar(){
    console.log("Hola " + nombre)
}

saludar()

//SCOPE LOCAL DE FUNCIÓN
function saludo() {
    var apellido = "Perez"; //CUIDADO: si no se especifica (var,let, const) la convierte en Scope Global.
    console.log(apellido);
}

saludo(); // "Andres"
console.log(apellido); // ReferenceError: nombre is not defined

//SCOPE LOCAL DE BLOQUE

if (true){
    var saludo = "hola"
    let despedida = "chao"
  }
  
  console.log(saludo) // "hola"
  console.log(despedida) // ReferenceError: despedida is not defined