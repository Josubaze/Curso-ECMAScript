/*Big Int, enteros muy grandes
El nuevo dato primitivo bigint permite manejar números 
enteros muy grandes. Existen dos formas de crear un bigint:
 el número entero seguido de n o mediante la función BigInt */

/* JavaScript tiene límites numéricos, un máximo Number.MAX_SAFE_INTEGER y 
un mínimo Number.MIN_SAFE_INTEGER. Fuera de estos límites, los cálculos 
matemáticos pueden fallar y mostrar resultados erróneos. Con BigInt esto se resuelve. */
const max = Number.MAX_SAFE_INTEGER
const min = Number.MIN_SAFE_INTEGER

console.log(max)  // 9007199254740991
console.log(min) // -9007199254740991

const abignumber = 8798785646544879n;
const anotherbignumber = BigInt(46484949845146489);

console.log(abignumber);
console.log(anotherbignumber);
console.log(abignumber+anotherbignumber);