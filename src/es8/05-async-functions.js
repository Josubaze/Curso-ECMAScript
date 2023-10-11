const fnAsync = () => {
    return new Promise((resolve, reject) =>{
        (true)
            ? setTimeout(() => resolve('Async'), 2000)
            : reject(new Error('Error!'));
    })
}

const anotherfn = async() => {
    const something = await fnAsync();
    console.log(something);
    console.log('hello!');
}

console.log('Before');
anotherfn();
console.log('after');

/*La función asíncrona se crea mediante la palabra reservada async y retorna una promesa.

async function asyncFunction () {...}

const asyncFunction = async () => { ... } 

La palabra reservada await significa que espera hasta que una promesa sea 
resuelta y solo funciona dentro de una función asíncrona. 
Los bloques try / catch sirven para manejar si la promesa ha sido resuelta o rechazada.

async function asyncFunction () {
  try {
    const response = await promesa()
    return response
  } catch (error) {
    return error
  }
} */