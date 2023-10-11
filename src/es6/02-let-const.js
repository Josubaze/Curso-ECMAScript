var last_name = "David";
last_name = "Oscar";
console.log(last_name);

let fruit = "Apple";
fruit = "Kiwi";
console.log(fruit);

const animal = "Dog";
animal = "Cat"; // no permite reasigar
console.log(animal);

const fruits = () => {
    if (true) {
        var fruit1 = "Applet"; //funtion scope
        let fruit2 = "Kiwi"; // block scope - no se accede desde fuera del bloque
        const fruit3 = "Banana"; // block scope
    }
    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
}

fruits();