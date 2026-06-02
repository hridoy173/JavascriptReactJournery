// Primitive  data type
// Primitives values
// Number , String , Null , Undefined , Boolean , Symbol(ES6) , BigInt(ES2020)

var a = 10 ;
var b = a ;
var nameArray = ["Hridoy", "John", "Doe"] ;
var nameArrayCopy = nameArray ;
console.log(nameArray, nameArrayCopy);
nameArray.pop("Doe") ;
nameArray.push("Smith") ;
console.log(nameArray, nameArrayCopy); // Output: ["Hridoy", "John", "Doe", "Smith"] ["Hridoy", "John", "Doe", "Smith"]


console.log(a, b); // Output: 10 10
a = 20 ;
console.log(a, b); // Output: 20 10

var name = "Hridoy" ;
var nameCopy = name ;

console.log(name, nameCopy); // Output: Hridoy Hridoy
name = "John" ;
console.log(name, nameCopy); // Output: John Hridoy




// Reference data type
// Reference values
// Object , Array , Function , Date , RegExp , Map , Set , WeakMap , WeakSet

var persona = {
    name : "Hridoy",
    age : 25,
    greet : function() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

console.log(persona.name); // Output: Hridoy
persona.greet(); // Output: Hello, my name is Hridoy and I am 25 years old.

console.log(persona.name, persona.age); // Output: Hridoy 25
var personCopy = persona ;
personCopy.name = "John" ;
personCopy.age = 30 ;
console.log(personCopy.name, personCopy.age); // Output: John 30



var number1 = 10 ;
var number2  = number1 ;

var numberObject = {
    num : 22 
};


const newNumber  = (value) => {
    // value = 20 ;
    value.num = 10 ;
}

newNumber(numberObject) ;
console.log(number1,numberObject); // Output: 10 { num: 10 }