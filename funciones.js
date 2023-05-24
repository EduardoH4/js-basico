//EXISTE 2 TIPOS DE FUNCIONES

//FUNCIONES DECLARATIVAS
function saludar(nombre){
    console.log(`Hola ${nombre}`);
};

saludar('Melvin'); //Hola Melvin 
saludar('Antonia');//Hola Antonia 

//FUNCIONES EXPRESIVAS/ANONIMAS 

var suma = function(a,b){
    return a+b;
};

let resultado = suma(1,3);
console.log(resultado);

//DIFERENCIAS 
//las Funciones Declarativas son funciones que se declaran directamente, las Funciones De Expresión son funciones guardadas dentro de una variable y no tiene nombre propio.

// Con las funciones declarativas, podemos mandar llamar la función antes de que ésta sea declarada, y con la expresión de función, no, tendríamos que declararla primero, y después mandarla llamar.