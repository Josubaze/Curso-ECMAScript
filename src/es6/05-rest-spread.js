var usuario = { nombre: "Andres", edad: 23, plataforma: "Platzi" }

var nombre = usuario.nombre
var edad = usuario.edad
var plataforma = usuario["plataforma"]

console.log(nombre)  // 'Andres' 
console.log(edad)  // 23
console.log(plataforma)  // 'Platzi'

/*Con la desestructuración puedes realizar lo mismo, pero en
una sola línea, provocando que el código seas más legible y mantenible.*/

//objects destructuring
const usuario = { nombre: "Andres", edad: 23, plataforma: "Platzi" };

const { nombre, edad, plataforma } = usuario;

console.log(nombre);  // 'Andres' 
console.log(edad);  // 23
console.log(plataforma);  // 'Platzi


//Como los arrays son un tipo de objeto, puedes utilizar la desestructuración 
//de objetos mediante el índice y utilizando un nombre para la variable.

const array = [ 1, 2, 3, 4, 5 ]

const {4: cinco} = array

console.log(cinco) // 5


//arrays destructuring
let fruits = ['Apple', 'Banana'];
let [a, b] = fruits;
console.log(a, fruits[1]);



// spread operator
let person = {name: 'oscar', age: 28};
let country = 'MX';

let date = {id: 1, ...person, country};
console.log(date);

// rest
/*Diferencias entre el parámetro rest y el operador de propagación
Aunque el parámetro rest y el operador de propagación utilicen la misma
sintaxis, son diferentes.

El parámetro rest agrupa el residuo de elementos y siempre debe
estar en la última posición, mientras que el operador de propagación 
expande los elementos de un iterable en un array y no importa en que 
lugar esté situado.*/

function sum(num, ...values){
    console.log(values); //[1,2,3] el primer 1 pertenece a num
    console.log(num + values[0]); // 1 + 1 = 2
    return num + values[0]; //
}

sum(1, 1, 2, 3);

//Para evitar esto, utiliza el operador de propagación para 
//crear una copia del array que utilice una referencia en memoria diferente al original.

//const originalArray = [1,2,3,4,5]
//const copyArray = [...originalArray]
copyArray[0] = 0

originalArray // [1,2,3,4,5]
copyArray // [0,2,3,4,5]
originalArray === copyArray  // false


/*Cuidado con la copia en diferentes niveles de profundidad
El operador de propagación sirve para producir una copia en un
solo nivel de profundidad, esto quiere decir que si existen objetos 
o arrays dentro del array a copiar. Entonces los sub-elementos en cada
nivel, tendrán la misma referencia de memoria en la copia y en el original.
Sin embargo, recientemente salió una forma de producir una copia profunda 
con StructuredClone, aunque es una característica muy reciente, así que
 revisa que navegadores tienen soporte. */

const originalArray = [1, [2,3] ,4,5]
const copyArray = structuredClone(originalArray)

console.log(originalArray === copyArray);  // false
console.log(originalArray[1] === copyArray[1]); // false