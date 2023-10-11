const list = new Set();

list.add('item 1');
list.add('item 2').add('item 3'); // encadenada
console.log(list);

list.delete('item 1'); // borra por valor ya que no permite duplicados


console.log(list);// search por valor
console.log(list.has('item 2'));

console.log(list.size); //tamaño de set


/*add(value): añade un nuevo valor.
delete(value): elimina un elemento que contiene el Set, retorna un booleano si existía o no el valor.
has(value): retorna un booleano si existe o no el valor dentro del Set.
clear(value): elimina todos los valores del Set.
size: retorna la cantidad de elementos del Set.*/