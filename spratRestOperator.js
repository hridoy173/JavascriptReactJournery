var number  = [1,2,3,4,5,6,7,8,9,10];

// var a = number; 
var a = [...number]; // Spread Operator

var number2 = [number[1],number[2],number[3],11,12,13,14,15];
number.push(1000);

const newArray = [...number,...a];
// var naumber2 = [...number,11,12,13,14,15];
// console.log(number2,a,number,newArray);



//rest operator 


function sum(a,b){
    console.log(a+b);
}

sum(10,20); // Output: 30

function numberFun(){
    console.log(arguments);
}

numberFun(1,2,3,4,5); // Output: [Arguments] { '0': 1, '1': 2, '2': 3, '3': 4, '4': 5 }


function myFun(a,b,...args){
    console.log(a,b);
    console.log(args);
}

myFun(1,2,3,4,5,6,7,8,9,10);