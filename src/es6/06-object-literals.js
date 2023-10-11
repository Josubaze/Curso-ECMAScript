function newUser(user, age, country, uId) {
    return  {user,
             age,
             country,
             id: uId
            }
}

console.log(newUser('josubaze', 27, "Vzla", 1));

// antes se repetia la propiedad para hacer la referencia.

function newUser(user, age) {
    return  {user:user ,
             age: age,
            }
}