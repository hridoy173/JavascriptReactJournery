
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