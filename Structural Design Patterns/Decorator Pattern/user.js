var User = function (name) {
    this.name = name;

    this.say = function () {
        console.log("User: " + this.name);
    };
}

var DecoratedUser = function (user, street, city) {
    this.user = user;
    this.name = user.name;  // ensures interface stays the same
    this.street = street;
    this.city = city;

    this.say = function () {
        console.log("Decorated User: " + this.name + ", " +
            this.street + ", " + this.city);
    };
}

function run() {

    var user = new User("Kelly");
    user.say();

    var decorated = new DecoratedUser(user, "Broadway", "New York");
    decorated.say();
}

run();

//In the example code a User object is decorated (enhanced) by a DecoratedUser object. 
//It extends the User with several address-based properties. The original interface must stay the same, 
//which explains why user.name is assigned to this.name. Also, the say method of DecoratedUser hides the say method of User.