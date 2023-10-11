/*El método Object.fromEntries devuelve un objeto a partir de un array
donde sus elementos son las entries en forma [propiedad, valor].

Se considera la operación inversa de Object.entries(). */

const entries = new Map([['name','josue'],['age', 27]]); // simula el formato de  Object.entries()
console.log(entries);

console.log(Object.fromEntries(entries)); // lo vuelve un obj