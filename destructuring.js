
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

const {name:fullname, age} = user; // Destructuring the name and age properties from the user object

const {education: {degree, university, graduationYear}} = user; // Destructuring nested object

user.greet(); // Calling the greet method

console.log(degree, university, graduationYear); // Accessing the destructured properties

console.log(`My name is ${fullname} and I am ${age} years old.`); // Accessing the destructured properties



// Destructuring arrays ///

// const numbers = [1, 2, 3, 4, 5];
const numbers = [1, 2, [3,100,200], 4, 5];

const [,,,a,b] = numbers; // Destructuring the first three elements and the rest of the array
// const [,,[,a,b]] = numbers; // Destructuring the nested array

// const [first, second, ...rest] = numbers; // Destructuring the first two elements and the rest of the array

console.log(a, b);