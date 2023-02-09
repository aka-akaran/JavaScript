

const person = {
    name : "akash",
    cities : ["kota", "jaipur"],
    vehicles : ["cycle", "scooty"],
    friends : ["i", "me", "myself"]
} ;

// use the same key name for destructuring
const {n, c} = person ;
console.log(n, c) ;


console.log("\n") ;

const {name, cities, ...restAbout} = person ;
console.log(name) ;
console.log(cities) ;
console.log(restAbout) ;



console.log("\n") ;


// storing in different named variable
const{friends: dost} = person ;
console.log(dost) ;


// We can't do because we have stored friends in the variable named dost
// console.log(friends) ;


