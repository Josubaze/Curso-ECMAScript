/*Los métodos privados consiste en limitar el acceso a propiedades y métodos 
agregando el caracter numeral ( #). Por defecto, las propiedades y métodos de 
una clase en JavaScript son públicas, es decir, se puede acceder a ellos 
fuera de la clase. */
class User {
    #userAge;
    #userName;

    constructor(userName, userAge) {
        this.#userName = userName;
        this.#userAge = userAge;
    }

    greeting() {
        return `${this.#speak()} ${this.#userName}`
    }

    #speak(){
        return 'Hello World!';
    }
    get _userAge() {
            return this.#userAge;
    }

    set _userAge(age) {
            this.#userAge = age;
    }

    get _userName(){
        return `Hello ${this.#userName}!` ;

    }
}

const pepito = new User('Pepito', 20);

console.log(pepito._userName);