


const person = {
    name : "akash",
    age : 22, 
    hobbies : ["music suno", "movie dekho", "downloading stuff"]
} ;



// for in iteration
for(let key in person){
    console.log(`${key} : ${person[key]}`) ;
}


console.log("\n") ;

// get array of keys
const k = Object.keys(person) ;
console.log(k) ;


console.log("\n") ;


// for of iteration
for(let key of Object.keys(person)){
    console.log(person[key]) ;
}