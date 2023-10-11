function* getId(){
    let n = 0;
    while(true){
        yield n++;
    }
}

let id = getId(); //genera una sucesion de id sin repetirse usando funcion generator
console.log( id.next().value);
console.log( id.next().value);
console.log( id.next().value);



