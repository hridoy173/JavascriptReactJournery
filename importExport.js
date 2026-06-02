// import {pi,variable as radius} from "./external.js" ;
import external,{pi,myfunction as myFunc} from "./external.js" ;

var result = pi * external * external ;
// console.log(pi,radius,result);

console.log("Pi value is " + pi + " and the default export is " + external + " Result is " + result); // Accessing the imported variable and default export from external.js
myFunc(); // Calling the imported function from external.js
// var result = external.pi * radius ;
// console.log(external.pi,radius,result);