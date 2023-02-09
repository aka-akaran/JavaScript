

// variable declared as let and const don't get initilaised
// in the global memory object of global Execution Context
// BUT BUT BUT they are persent in the memory
// they have hoisting


// Uncaught ReferenceError: 
// Cannot access 'firstName' before initialization
console.log(firstName) ;


// Uncaught ReferenceError: 
// Cannot access 'lastName' before initialization
console.log(lastName) ;



const firstName = "Akash" ;
let lastName = "Singh" ;