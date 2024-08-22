// Null Object Design Pattern will remove the need of having lots of checks for null throughout your code. 
// Let’s rewrite the above code using this pattern.

// At first, we create a null wrapper class for the Person class 
// and later we instantiate the null class if the person is not found instead of returning null.
class Person {
  constructor(id, name) {
    this.id = id
    this.name = name;
  }
}

// Null person wrapper
class NullPerson {
  constructor() {
    this.id = null
    this.name = 'Guest';
  }
}

const persons = [
  new Person(1, "John Doe"),
  new Person(2, "John Papa")
]

function findPerson(id) {
  const person = persons.find(person => person.id === id)
  if (person)
    return person
  else
    return new NullPerson()
}

let personOne = findPerson(1)
console.log("Welcome, " + personOne.name)

let personTwo = findPerson(99)
console.log("Welcome, " + personTwo.name)
