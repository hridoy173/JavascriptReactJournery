var myObj  = {
    name : "Hridoy",
    age : 22,
    city : "Dhaka",
    myFunction : function () {
        console.log(`My name is ${this.name} and I am ${this.age} years old. I live in ${this.city}.`);
    }
}

const resultKey = Object.keys(myObj);
console.log(resultKey); // Output: [ 'name', 'age', 'city', 'myFunction' ]

const resultValue = Object.values(myObj);
console.log(resultValue); // Output: [ 'Hridoy', 22, 'Dhaka', [Function: myFunction] ]

myObj.myFunction(); // Output: My name is Hridoy and I am 22 years old. I live in Dhaka.

const resultEntries = Object.entries(myObj);
console.log(resultEntries); 
// Output: