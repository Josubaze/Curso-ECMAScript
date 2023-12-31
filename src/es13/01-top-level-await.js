/*Cómo utilizar top level await
Anterior a ECMAScript 13, cuando se introdujo funciones asíncronas,
si utilizabas await fuera de async, existirá un error de sintáxis.

// Error
await fetch(URL)
// SyntaxError: await is only valid in async function
Ahora, con top level await esto es posible, sin ningún error. 
Esto puede servir para importaciones de manera dinámica o iniciar 
la conexión de tus bases de datos. Siempre y cuando respetes que debe 
estar en la parte encima del archivo de tipo módulo. */

import { products } from "./products.js";

console.log(products);
console.log('hey!');