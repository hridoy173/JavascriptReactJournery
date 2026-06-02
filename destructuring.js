
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



/// example for temp values and swapping variables using destructuring
var firstValue= 10; var secondValue = 20; var thirdValue = 30;
// without destructuring
// var temp = firstValue; firstValue = secondValue; secondValue = thirdValue; thirdValue = temp;

[firstValue, secondValue, thirdValue] = [secondValue, thirdValue, firstValue]; // Using destructuring to swap values
console.log(firstValue, secondValue, thirdValue); // Output: 20 30 10

// example of destructuring in function parameters
function displayUserInfo({name, age, education: {degree, university}}) {
    console.log(`Name: ${name}, Age: ${age}, Degree: ${degree}, University: ${university} by object destructuring `);
}

displayUserInfo(user); // Passing the user object to the function which uses destructuring in its parameters


function newDisplayUserInfo({newName, newAge, newEducation: {newDegree, newUniversity}}) {
    console.log(`Name: ${newName}, Age: ${newAge}, Degree: ${newDegree}, University: ${newUniversity} by function parameters destructuring`);
}

// example of destructuring in function return values
function getUserInfo() {
    return {
        newName: 'Jane Doe',
        newAge: 25,
        newEducation: {
            newDegree: "Master's in Data Science",
            newUniversity: "Tech University"
        }
    };
}

newDisplayUserInfo(getUserInfo()); // Passing the returned object from the function to the newDisplayUserInfo function

const {newName, newAge, newEducation: {newDegree, newUniversity}} = getUserInfo(); // Destructuring the returned object from the function

console.log(`newName: ${newName}, newAge: ${newAge}, newDegree: ${newDegree}, newUniversity: ${newUniversity}`);