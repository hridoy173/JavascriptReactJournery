
// destructuring nested objects and accessing properties

const user = {
    name: 'John Doe',   
    age: 30,
    greet: function() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    },
    education : {
        degree : "Bachelor's in Computer Science",
        university : "University of Technology",
        graduationYear : 2015
    }
}

const {name, age} = user; // Destructuring the name and age properties from the user object

const {education: {degree, university, graduationYear}} = user; // Destructuring nested object

user.greet(); // Calling the greet method

console.log(degree, university, graduationYear); // Accessing the destructured properties

console.log(`My name is ${name} and I am ${age} years old.`); // Accessing the destructured properties