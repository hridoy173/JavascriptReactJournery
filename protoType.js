// let person = {
//     name: 'John',
//     age : 30 ,
//     sleep : function (){
//         console.log(`${person.name} is sleeping.`);
//     },
//     eat : function (){
//         console.log(`${person.name} is eating.`);
//     }
// }


const personMethod = {
    sleep: function(name) {
        console.log(`${name} is sleeping.`);
    },
    eat: function(name) {
        console.log(`${name} is eating.`);
    }
};

Person.prototype = {
    sleep : function() {
        console.log(`${this.name} is sleeping.`);
    },
    eat : function() {
        console.log(`${this.name} is eating.`);
    }

}



function Person(name, age) {

    // let person = {} ;
    // let person = Object.create(personMethod) ;
    // let person = Object.create(Person.prototype) ;


    this.name = name ;
    this.age = age ;
    
    // person.sleep = personMethod.sleep.bind(null, person.name) ;  
    // person.eat = personMethod.eat.bind(null, person.name) ;
    //  bind() method is used to create a new function that, when called,
    //  has its this keyword set to the provided value, with a given sequence of arguments preceding
    //  any provided when the new function is called.


    // person.sleep = function() {
    //     console.log(`${person.name} is sleeping.`);
    // }
    // person.eat = function() {
    //     console.log(`${person.name} is eating.`);
    // }
    // return person;
}


const Hridoy  = new Person('Hridoy', 25) ;
const Shekh = new Person('Shekh', 25) ;

// console.log(Hridoy.name, Hridoy.age); // Output: Hridoy 25
// console.log(Shekh.name, Shekh.age); // Output: Shekh 25

Hridoy.sleep(); // Output: Hridoy is sleeping.
Shekh.eat(); // Output: Shekh is eating.




// 

let captain  = {
    name : "Captain America",
    age : 100 ,
    country : "USA"
}

const player = Object.create(captain) ;

// let persons = new Array();
let persons = [1,2,3];


persons.push('Hridoy');

persons.map((person) => {
    console.log(`Hello, ${person}`); ;
}) ;

persons.filter((person) => {
    return person === 'Hridoy' ;
}) ;

console.log(persons) ;

// console.log(player.name,player);


