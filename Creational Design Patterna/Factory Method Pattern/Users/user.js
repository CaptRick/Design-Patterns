class User {
    constructor(fn, ln, email) {
        this.firstName = fn;
        this.lastName = ln;
        this.email = email;
    }

    getFullName(){
        return `${this.firstName} ${this.lastName}`
    }
}


const firstUser = new User("Muhammad", "Adnan", "engr.adnan2016@gmail.com");

console.log(firstUser.getFullName())