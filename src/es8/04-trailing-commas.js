/*Trailing commas
Las trailing commas consisten en comas al final de objetos o arrays 
que faciliten añadir nuevos elementos y evitar errores de sintaxis. */
const arr = [34, 56, 89, 98, , , , , 4];

console.log(arr);
console.log(arr.length);

const usuario = {
    name: 'Andres',
    email: "andres@correo.com",
    age: 23, //<-- Trailing comma
}

const nombres = [
    "Andres",
    "Valeria",
    "Jhesly", //<-- Trailing comma
]
