
// general function

function add(a, b) {
    return a + b;
}

add(5, 10); // Output: 15

// Arrow function

const subtract = (a,b) =>{
    return a - b;
}

const addArrow = (a, b) => a + b;
addArrow(5, 10); // Output: 15

console.log(subtract(12,2)); // Output: 10


var object  = {
    name : "Hridoy",
    age: 25,
    skills : ["JavaScript", "React", "Node.js"],
    myFunction : function() {
        // this.skills.forEach (function (skill) {
        //     console.log(`${this.name} has a skill called ${skill}`); // Output: undefined has a skill called JavaScript
        // });
        this.skills.forEach( (skill) => console.log(`${this.name} has a skill called ${skill}`) );
    }
}

object.myFunction(); // Output: undefined has a skill called JavaScript


class User {

    constructor(name, age, education) {
        this.name = name;
        this.age = age;
        this.education = education;
    }

    test() {
            console.log("Hello World"); // Output: Window object
        }

            
    finalFunction() {
        let arr = [1,2,3,4,5];
        return arr.find(() => {
            this.test(); // Output: test function info 
        });
    };

}



let user = new User("Hridoy", 25, "Bachelor's in Computer Science");
user.finalFunction(); // Output: test function info 



// find built in function in arrays

let newArr = [1,2,3,4,5];
newArr.find(function(currentValue,currentIndex,arr){
    currentValue > 3 ? console.log(currentValue) : console.log("Not found"); // Output: 4 5
});

newArr.find( (currentValue,currentIndex,arr) => {
    currentValue < 3 ? console.log(currentIndex,arr) : console.log("Not found"); // Output: 1 2
});



// filter built in function in arrays
const nextArr = [1,2,3,4,5,6,7,8,9,10];

const resultArr = nextArr.filter(function(currentValue,currentIndex,arr){
    return currentValue > 5; // Output: [6,7,8,9,10]
});

console.log(resultArr); // Output: [6,7,8,9,10]


// concat and spread operator usign in arrays
var number1 = [1,2,3,4,5];
var number2 = [6,7,8,9,10];
// var combined = number1.concat(number2); // Output: [1,2,3,4,5,6,7,8,9,10]
var combined = [...number1, ...number2]; // Output: [1,2,3,4,5,6,7,8,9,10]
console.log(combined); // Output: [1,2,3,4,5,6,7,8,9,10]


// map built in function in arrays
var mapResult = combined.map( (num) => num * 2 ); // Output: [2,4,6,8,10,12,14,16,18,20]
console.log(mapResult); // Output: [2,4,6,8,10,12,14,16,18,20]

    
var reduceResult = combined.reduce( (accumulator, currentValue,currentIndex,arr) => accumulator + currentValue, 0 ); // Output: 55
console.log(reduceResult); // Output: 55