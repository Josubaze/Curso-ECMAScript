//*El método at() recibe un valor numérico entero y devuelve el elemento en esa posición, 
//*permitiendo valores positivos y negativos.

const arr = ['one', 'two', 'three', 'four', 'five', 'six'];

console.log(arr[arr.length - 1]); // forma tradicional

console.log(arr.at(-1)); // con at

/*Los índices negativos comienzan desde -1 hasta el negativo de la
longitud total del array, de derecha a izquierda. El índice -1 es la
última posición.

[-lenght, ...,  -3, -2, -1]

Cómo utilizar el método at
La utilidad más importante de este método es para manejar índices negativos.
Algo que no se puede con la notación de corchetes.

const nombres = ["Andres", "Valeria", "Ana", "Ramiro", "Richard"]

nombres.at(-1) // "Richard"
nombres[-1] // undefined
nombres.at(-3) // "Ana"
nombres[nombres.length -1] // "Richard"

Puedes utilizar la notación de corchetes, pero necesitas obtener 
la longitud del array y restarle una unidad, generando mucho código que puede 
volverse difícil de leer. */