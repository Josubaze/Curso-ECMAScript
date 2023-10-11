/*Rellenar un string o padding
El padding consiste en rellenar un string por el principio 
o por el final, con el carácter especificado, repetido hasta 
que complete la longitud máxima. 

Este método recibe dos argumentos:

La longitud máxima a rellenar, incluyendo el string inicial.
El string para rellenar, por defecto, es un espacio.*/

const string = 'hello';
console.log(string.padStart(10,'a'));  //aaaaahello

'abc'.padStart(10) // "       abc"
'abc'.padStart(10, "foo") // "foofoofabc"
'abc'.padStart(6,"123465") // "123abc"
'abc'.padStart(8, "0") // "00000abc"
'abc'.padStart(1) // "abc"

/*Método padEnd
El método padEnd completa un string 
con otro string en el final hasta tener un total 
de caracteres especificado. */

'abc'.padEnd(10) // "abc       "
'abc'.padEnd(10, "foo") // "abcfoofoof"
'abc'.padEnd(6, "123456") // "abc123"
'abc'.padEnd(1) // "abc"

/**Es un método que permite rellenar la cadena actual con una cadena dada.
 *  El relleno es aplicado desde el inicio de la cadena actual.*/

str.padStart(targetLength, padString);
/*targetLength → Es la longitud de la cadena resultante una vez que haya sido rellenada. 
Si este parámetro es más pequeño que la longitud de la cadena actual,
la cadena se mantendrá igual.

padString → Valor opcional. La cadena para rellenar la cadena actual. 
Si esta cadena es muy larga, será recortada y la parte más a la izquierda será aplicada */