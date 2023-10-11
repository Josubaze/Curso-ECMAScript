function newUser(name, age, country) {
    var name = name || "Oscar";
    var age = age || 34;
    var country = country || 'MX';
    console.log(name,age,country);
}

newUser();
newUser("David", 15, "CO");

function newAdmin(name = "Oscar", age = 34, country = "MX") {
    console.log(name, age, country);
}

newAdmin();
newAdmin("Mateo", 25, "EC")