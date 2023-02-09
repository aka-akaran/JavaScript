
// function decleration stores in the global memory object as it is during global execution context
// and var are initialised with undefined

console.log(window) ;
console.log(this) ;
console.log(fullName) ;
console.log(wish) ;
wish() ;

function wish(){
    console.log("have a great day") ;
}

var firstName = "Akash" ;
var lastName = "Singh" ;
var fullName = firstName + " " + lastName ;
console.log("\n", fullName) ;