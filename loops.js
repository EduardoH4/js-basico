
let estudiantes = ["Melvin", "Antonia","Sebastian"];

 function saludarEstudiante(estudiante){
    console.log(`Hola ${estudiante}`);
 }



 //FOR COMO NORMALMENTE SE CONOCE EL "FOR"
 for(let i = 0; i < estudiantes.length; i++){
    saludarEstudiante(estudiantes[i]);
 }

 //OTRA MANERA DE USAR EL "FOR"
 //El ciclo for ... of es una variación del ciclo for que se utiliza para recorrer los valores de los elementos de un array.
 for(let estudiante of estudiantes){
    saludarEstudiante(estudiante);
 }

 //BREAK/CONTINUE EN UN "FOR"

 const carrito = [
    {nombre: 'Monitor 27 Pulgadas', precio: 500},
    {nombre: 'Televisión', precio: 100},
    {nombre: 'Tablet', precio: 200, descuento: true},
    {nombre: 'Audifonos', precio: 300},
    {nombre: 'Teclado', precio: 400},
    {nombre: 'Celular', precio: 700},
   ]

 for (let i = 0; i < carrito.length; i++) {
     if (carrito[i].descuento) {
         console.log(`El articulo ${carrito[i].nombre} tiene DESCUENTO`);
         continue
        }
        console.log(carrito[i].nombre);  
 }




/* CICLO WHILE
Para el ciclo while no conocemos la cantidad de veces que la estructura repetirá una o varias instrucciones
*/
var edad = 10;

while (edad > 18 || edad <= 0){
  edad = Number(prompt("Ingrese un valor correcto: "));
}

console.log("Gracias por ingresar al programa");




//EJERCICIO RESUELTO 

 function solution(estudiantes, deathCount, nuevo) {

    if (deathCount === 0) {
        estudiantes.push(nuevo);
        return estudiantes;
    } else {
        for (let i = 1; i <= deathCount; i++) {
            estudiantes.pop();
        }

        estudiantes.push(nuevo);
        return estudiantes; 
    }
  }

  console.log(solution(["Juan", "Juanita", "Daniela"], 2, "Julian"));

  let i = 1000;

do {
	console.log(`Número ${i}`);

i++;
}while ( i< 10);

// 1000