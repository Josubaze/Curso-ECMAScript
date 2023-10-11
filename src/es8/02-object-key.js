/*Obtener las propiedades de un objeto en un array
Object.keys() devuelve un array con las propiedades (keys)
 del objeto enviado como argumento */

const usuario = {
    name: "Andres",
    email: "andres@correo.com",
    age: 23
}
console.log(Object.keys(usuario) );