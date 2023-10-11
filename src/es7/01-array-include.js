let number = [1,2,3,4];

console.log(number.includes(4)); // true

let list = ['Oscar', 'Farias', 'Miguel'];
console.log(list.includes('Petra')); // false

let list1 = ['Oscar', 'Farias', 'Miguel'];
console.log(list1.includes('oscar')); // false son strgin diff

//Utilizando strings
const saludo = "Hola mundo"

saludo.includes("Hola") // true
saludo.includes("Mundo") // false
saludo.includes(" ") // true
saludo.includes("Hola", 1) // false
saludo.includes("mundo", -5) // true

// Utilizando arrays
const frutas = ["manzana", "pera", "piña", "uva"]

frutas.includes("manzana") // true
frutas.includes("Pera") // false
frutas.includes("sandía") // false
frutas.includes("manzana", 1) // false
frutas.includes("piña", -1) // false
frutas[0].includes("man") // true