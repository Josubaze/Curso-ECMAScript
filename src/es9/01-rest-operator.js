/*Rest tiene dos aplicaciones, como Rest property (en asignación desestructurada)
y como Rest parameters.
.
El ejemplo del profesor muestra el uso de Rest Property, es decir, 
una asignación desestructurada aplicada en un objeto.
.
Los rest parameters permiten a una función aceptar una cantidad indefinida
 de argumentos (aunque esto no suele ser una buena práctica) */

const user = {username:'Josubaze', age: 27, country: 'VE'};
const { username, ...values} = user; //destructuring, se crea username y values a partir de user

console.log(username);
console.log(values);