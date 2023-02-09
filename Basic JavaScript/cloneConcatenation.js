


// Note : Equals operator ;

let arr1 = [1] ;
let arr2 = [1] ;
console.log(arr1===arr2) ;
// for Arrays - Equals when both have same values and same address

console.log("\n") ;


// Clone Array primitively
let a1 = ["a1"] ;
let a2 = a1.slice(0) ;
let a3 = [].concat(a1, "temp") ;
let a4 = [...a1] ;

a1[0] = "arr1" ;
// modification in a1 does not reflect in a2, a3,a4

console.log(a1) ;
console.log(a2) ;
console.log(a3) ;
console.log(a4) ;

console.log("\n") ;
console.log("\n") ;

// Concatenate
let b1 = ["b1"] ;
let b2 = b1.concat("b2") ;
let b3 = b2.concat(["b3, b4"]) ;

// Spread opearator ...
let b5 = [...b3, "b5", "akash", "rash", ...b1] ;

console.log(b1) ;
console.log(b2) ;
console.log(b3) ;
console.log(b5) ;

// array1.concat.array2 ;