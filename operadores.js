/* OPERADORES ARITMETICOS
Los operadores aritméticos se utilizan para efectuar operaciones matemáticas, estos toman valores numéricos (ya sean literales o variables) como sus operandos y retornan un valor numérico único. 
*/
// Suma
2 + 3 // 5
// Resta
5 - 3 // 2
// Multiplicación
4 * 2 // 8
// División
6 / 2 // 3
1 / 2 == 1.0 / 2.0; // Esto es true

/* OPERADORES DE ASAIGNACIÓN
 Se utilizan para darle valor a una variable (Asigna un valor al operando de la izquierda basado en el valor del operando de la derecha).
*/
var contador = 1

contador += 2
contador -= 1
contador *= 5
contador /= 2

console.log(contador)

/* OPERADORES DE COMPARACIÓN
Un operador de comparación compara dos o más valores y devuelve un valor lógico/boolean en función si la operación es (verdadero o falso).
*/

//Igualdad
"3" == 3 // true
3 == 3 // true

// Igualdad estricta
"3" === 3 // false
3 === 3 // true

//Desigualdad
"3" != 3 // false
3 != 3 // false

// Desigualdad estricta
"3" !== 3 // true
3 !== 3 // false

// Menor que
3 < 5 // true

// Mayor que
3 > 5 // false

// Mayor o igual a que
3 >= 3 // true
3 >= 5 // false

// Menor o igual a que
3 <= 3 // true
3 <= 5 // true


/* OPERADORES LOGICOS
Los operadores lógicos comparan dos o más expresiones y devuelve un valor lógico (verdadero o falso). Las expresiones son comparaciones entre valores, se utiliza en conjunto con los operadores de comparación.
*/

//El Operador de Disyunción o AND
var a = 15
var b = 5

(a >= 10) && (a <= 20) // true
(b >= 10) && (b <= 20) // false

//El operador de unión u OR 
var a = 15
var b = 5

(a <= 10) || (a >= 20) // false
(b <= 10) || (b >= 20) // true

//El operador de Negación o NOT 
var a = 5

!(a < 0) // true