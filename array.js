/*Los Arrays son una manera ordenada de almacenar una lista de elementos que pueden ser de diferentes tipos de datos, bajo un solo nombre de variable, cuenta con métodos para efectuar operaciones de Recorrido y de Mutación.*/

//CREAR UN ARRAY
let frutas = ["Manzana", "Banana"]
console.log(frutas.length) // 2

//METODOS DE ARRAY
/*
array.push()
array.pop()
array.unshift()
array.shift()
array.indexOf()
array.forEach()

/* En este desafío vas a recibir un parámetro arraySecreto en la función solution.
 Debes retornar true si el primer elemento del arraySecreto es de tipo string y 
 debes retornar false si es de cualquier otro tipo.
  */

 function solution(arraySecreto) {
    return typeof arraySecreto[0] === "string" ? true : false;
  }

  
console.log(solution(["Huevo", "Gallina", "Vaca"]));
console.log(solution([1, "Gallina", "Vaca"]));