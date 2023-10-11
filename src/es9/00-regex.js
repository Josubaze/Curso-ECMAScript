/*Las expresiones regulares o RegEx (regular expresions) son patrones de búsqueda
y manipulación de cadenas de caracteres increíblemente potente y están presentes
en todos los lenguajes de programación.

En JavaScript se crea este patrón entre barras inclinadas (/patrón/) y se utiliza 
métodos para hacer coincidir la búsqueda. */

const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2018-04-2020')

console.table(match);
const f = '2018-04-20';

// probando que el valor obtenido se ajusto al formato.
if(match[0] == f){
    console.log('iguales'); //si se ajusto
}else{
    console.log('nel');
}