/*

trim() ;
toUpperCase() ;
toLowerCase() ;
slice() ;

these methods does not modify string, they are return functions

*/


let name = "     Akash Kumar Singh   " ;

let trimmed = name.trim() ;
let uC = name.toUpperCase() ;
let lC = name.toLowerCase() ;
let sliced = trimmed.slice(1) ;
let sliced2 = trimmed.slice(1, 5) ;


console.log(name) ;
console.log(trimmed) ;
console.log(uC) ;
console.log(lC) ;
console.log(sliced) ;
console.log(sliced2) ;
