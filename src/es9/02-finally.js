const anotherfn = () =>{
    return new Promise((resolve, reject) => {
        if(false){
            resolve('Hey!');
        }else{
            reject('Whooooops!')
        }
    })
}
/*El método finally para promesas consiste en ejecutar código después
 que una promesa haya sido ejecutada como resuelta o rechazada. */
anotherfn()
    .then(response => console.log('Then...' + response)) // Promesa resuelta
    .catch(err => console.log('catch...' + err))// Promesa rechazada
    .finally(() => console.log("Finalizado")) // Código final