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
    let person = Object.create(Person.prototype) ;


    person.name = name ;
    person.age = age ;
    
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
    return person;
}


const Hridoy  = Person('Hridoy', 25) ;
const Shekh = Person('Shekh', 25) ;

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

// console.log(player.name,player);


