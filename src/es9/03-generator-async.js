async function* anotherGenerator() {
    yield await new Promise((resolve) => {
    setTimeout(() => {
      resolve(1);
    }, 1000); // Agregar un retraso de 1 segundo (1000 ms)
  });
    yield await Promise.resolve(2)
    yield await Promise.resolve(3)
}

const generador = anotherGenerator()
generador.next().then(respuesta => console.log(respuesta.value)) //estos al tener propiedades promise, async y await depende de que termine uno para empezar el otro.
generador.next().then(respuesta => console.log(respuesta.value))
generador.next().then(respuesta => console.log(respuesta.value))
console.log('hello!'); // este es sincrono por ello siempre se ejecuta primero


async function* anotherGenerator() {
    yield  Promise.resolve(1)
    yield  Promise.resolve(2)
    yield  Promise.resolve(3)
}

(async () => {
    const generador = anotherGenerator();
    console.log((await generador.next()).value);
    console.log((await generador.next()).value);
    console.log((await generador.next()).value);
    console.log('Hello!'); // aqui si se muetra en orden de instruccion se encuentra dentro del async y propiedades await 
})();

// en este ultimo se ejecutan primero las promesas 2 y 3 no existe el await del async
function* anotherGenerator() {
    yield  new Promise((resolve) => {
      setTimeout(() => {
        resolve(1);
      }, 1000); // Agregar un retraso de 1 segundo (1000 ms)
    });
    yield  Promise.resolve(2);
    yield  Promise.resolve(3);
}

const generador1 = anotherGenerator()

generador1.next().value.then(resp => console.log(resp)); 
generador1.next().value.then(resp => console.log(resp));
generador1.next().value.then(resp => console.log(resp));
console.log('hello!'); // este es sincrono por ello siempre se ejecuta primero