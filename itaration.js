// loop itrations
// for , while , do while , for in , for of , forEach loop


// for loop
for (let i = 0; i < 5; i++) {
    console.log(i + ' th iteration');
}


// while loop
let j = 0 ; // initialization
while (j < 5) // condition
 { 
    console.log(j);
    j++; // iteration
}


// do while loop
let i = 0 ; // initialization
let text = "";
do {
  text += " The number is " + i;  // statement
  i++; // iteration
}
while (i < 10); // condition
console.log(text);


// for in loop
const person = {
    name: "Hridoy",
    age: 25,
    city: "Dhaka"
};

for (let key in person) {
    console.log(key , person[key]);
}


// for of loop
const nameArray = ["Hridoy", "John", "Doe"] ;
for (let name of nameArray) {
    console.log(name, nameArray.indexOf(name));
}

for (let player of person) {
    console.log(` Player: ${player.name}, Age: ${player.age}`);
}
