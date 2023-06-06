//Los valores truthy y falsy son valores verdaderos y falsos cuando se realiza una coerción de cualquier tipo a booleano, respectivamente.

//VALORES *FALSY*
// Un valor *FALSY* es aquel que es **falso** en un contexto booleano,
// Coersión explícita
console.log(Boolean(0)); // false
console.log(Boolean("")); // false
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN)); // false
console.log(Boolean(false)) // false

//VALORES *TRUTHY*
//Un valor truthy es aquel que es verdadero en un contexto booleano,
// Coersión explícita
console.log(Boolean(12)); // true
console.log(Boolean("hola")); // true
console.log(Boolean(true)); // true
console.log(Boolean([1, 2, 3])); // true
console.log(Boolean(function hola() {})); // true
console.log(Boolean({ a: 1, b: 2 })); // true