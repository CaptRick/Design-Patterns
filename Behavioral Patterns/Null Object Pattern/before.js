//Take a look at the code below, 
//we have a very simple example of a greeting code where we welcome the user by name if the person’s name is set, else, we say it ‘Guest’.
class Person {
  constructor(id, name) {
    this.id = id
    this.name = name;
  }
}

const persons = [
  new Person(1, "John Doe"),
  new Person(2, "John Papa")
]

function findPerson(id) {
  return persons.find(person => person.id === id)
}

let personOne = findPerson(1);
if (personOne != null && personOne.name != null) {
  console.log("Welcome, " + personOne.name)
} else {
  console.log("Welcome Guest")
}

// Again in some other part of code
let personTwo = findPerson(4)
if (personTwo != null && personTwo.name != null) {
  console.log("Welcome, " + personTwo.name)
} else {
  console.log("Welcome Guest")
}
