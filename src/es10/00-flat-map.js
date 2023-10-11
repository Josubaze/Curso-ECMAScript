/*Qué es el aplanamiento de arrays

El aplanamiento consiste en transformar un array de arrays a una sola dimensión. 
Los métodos flat y flatMap permitirán realizar el aplanamiento.

Método flat
El método flat devuelve un array donde los sub-arrays han sido propagados
hasta una profundidad especificada.

Este método es inmutable, es decir, retorna un nuevo array con los
cambios y no cambia el array original.

Este método recibe un argumento:

La profundidad del aplanamiento, por defecto, tiene un valor de 1. */
const array0 = [1,2,[3,4],5,6]
const result = array0.flat() 
console.log(array0.flat());

result// [1,2,3,4,5,6]
const array = [1,2,3,4, [1,3,5, [2,5]]];
console.log(array.flat(3));

/*Método flatMap
El método flatMap es una combinación de los métodos map y flat. 
Primero realiza la iteración de los elementos del array (como si fuera map), 
y después los aplana en una sola profundidad (como si fuera flat).

Este método es inmutable, es decir, retorna un nuevo array con los cambios
 y no cambia el array original. */

const arr = [2,4,6,8];
console.log(arr.flatMap(v => [v, v*2]));

const strings = ["Nunca pares", "de Aprender"]
strings.map(string => string.split(" ")) 
// [ [ 'Nunca', 'pares' ], [ 'de', 'Aprender' ] ]
strings.flatMap(string => string.split(" ")) 
// [ 'Nunca', 'pares', 'de', 'Aprender' ]

const numbers = [1,2, 3, 4]
numbers.map(number => [number * 2]) 
// [[2], [4], [6], [8]]
numbers.flatMap(number => [number *2]) 
// [2, 4, 6, 8]

// Cuidado, primero hace el map y luego el flat
const numbers2 = [1,[2,3], 4, 5]
numbers2.flatMap(number => [number *2]) 
// [ 2, NaN, 8, 10 ]
// Recuerda: NaN = No a Number




