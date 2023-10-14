const users = {
    gndx : {
        contries: 'MX'
    },
    ana: {
        contries: 'PE'
    }
}

console.log(users.ana.contries);

// *console.log(users.fadel.contries); no existe y puede romper el codigo
/*Al acceder a una propiedad más profunda de un objeto, que previamente fue 
evaluada como undefined, el programa se detendrá y mostrará un error de tipo.*/

//*El encadenamiento opcional u optional chaining (?.) 
//*detiene la evaluación del objeto cuando el valor es undefined o null antes del (?.), 
//*retornando undefined sin detener el programa por un error.

console.log(users.bebeloper?.contries); // undefined