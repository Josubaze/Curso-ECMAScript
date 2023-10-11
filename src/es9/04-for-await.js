/*De la misma manera, for await es un ciclo repetitivo que se maneja asíncronamente.
El ciclo siempre debe estar dentro de una función con async.

El valor es cada elemento del iterable puede tener cualquier nombre, por eso se
inicia con let nombre.*/

async function forAwait() {
  const nombres = ["Alexa", "Oscar", "David"]
  for await (let valor of nombres) {
    console.log(valor)
  }
}

forAwait();
console.log('otro...');