
// typeof operator

/*
// primitive data types

string ;
booleans ;
number ;
undefined ;
BigInt ;
Symbol ;
null ;

*/


// string to integer

let name = "56" ;
let stoi = +(name) ;
let num = Number(name) ;

console.log(name, typeof name) ;
console.log(stoi, typeof stoi) ;
console.log(num, typeof num) ;

console.log("\n") ;

// int to string
let age = 34 ;
let itos = age + "" ;
let str = String(age) ;

console.log(age, typeof age) ;
console.log(itos, typeof itos) ;
console.log(str, typeof str) ;

// BUG
console.log(typeof null) ;

// BigInt
let n = BigInt(56) ;
let m = 99n ;

console.log(n, typeof n) ;
console.log(m, typeof m) ;
