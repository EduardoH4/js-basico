//HOISTING (ELEVACIÓN de variables, funciones etc.) 

//Hoisting en variables declaradas con var
console.log(nombre) // undefined
var nombre = "Andres"

//Hoisting con let y const, el Hoisting solo funciona con var 
console.log(nameVar) // undefined
console.log(nameLet) // ReferenceError: nameLet is not defined

var nameVar = "myVar"
let nameLet = "myLet"

//Hoisting en scope de bloque
if (true){
    var saludo = "Hola"
    let despedida = "chao"
  }
  
  console.log(saludo) //Hola
  console.log(despedida) // ReferenceError: despedida is not defined

//Hoisting en funciones Declarativas
console.log( saludar() ) //Hola

function saludar() {
  return "Hola"
}
//Hoisting de variables dentro de una función
function scope() {
    console.log(nombre) // undefined
    console.log(edad) // undefined
    console.log(i) // undefined
    
    var nombre = "Andres"
    var edad = 20
    for (var i = 0; i< 6; i++) {
    //...
    }
  }

  scope();

  //Hosting en funciones asignadas a variables o FUNCIONES EXPRESIVAS. 

console.log( saludar() ) // TypeError: saludar is not a function

var saludar = function saludar() {
  return "hola"
}