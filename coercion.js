// La Coerción es el proceso mediante el cual JS convierte el valor de una variable de un tipo de dato a otro. Existen dos tipos de coerción: implícita y explícita.

//COERCIÓN IMPLÍCITA
//La coerción implícita consiste en la transformación de tipos mediante la ayuda de JavaScript.
//Ejemplo:
console.log(4 + "7"); // 47    -> JS en una suma convierte el Number a String y Los concatena.
console.log(4 * "7"); // 28    -> JS en una multiplicació convierte el String en Number y los multiplica. 
console.log(2 + true); // 3    -> JS convierte el boolean "true" en number 1.
console.log(false - 3); // -3  -> 
console.log(!3); // false

//COERCIÓN EXPLÍCITA
//La coerción explícita es la transformación de tipos de datos mediante el programador. 

console.log(Number("47")) // 47
console.log(parseInt("47nls")); // 47
console.log(String(51)); // "51"
console.log(Boolean(1)); // true