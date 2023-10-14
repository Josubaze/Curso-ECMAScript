/*Promise.any() es otra forma de manejar varias promesas, que retornará la primera
 promesa que sea resuelta y rebotará si todas las promesas son rechazadas. */

const promise1 = new Promise((resolve, reject) => reject ('Reject'));

const promise2 = new Promise((resolve, reject) => resolve ('Resolve111'));

const promise3 = new Promise((resolve, reject) => resolve ('Resolve 2'));

Promise.any([promise1, promise2, promise3])
    .then(response => console.log(response));