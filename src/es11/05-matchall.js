/*El método matchAll de los strings devuelve un iterable con todas 
las coincidencias del string específico a partir de una expresión regular, 
colocada como argumento.

string.matchAll(regex)

En el iterable, existe una propiedad denominada index con el 
índice del string donde la búsqueda coincide. */

const regex = /\b(Apple)+\b/g

const fruit = "Apple, Banana, Kiwi, Apple, Orange, etc. etc. etc."

// Tranformación del iterable retornado a array
const array = [...fruit.matchAll(regex)]
console.log(array)

// tambien funciona con un string pero se recomienda utilizar expresiones regulares.
const array1 = [...fruit.matchAll('Kiwi')]
console.log(array1)