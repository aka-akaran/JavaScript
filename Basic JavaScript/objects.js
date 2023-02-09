

// Objects are reference types
// Objects stores key value pairs
// typeof keys = string by default, either you write string or not 



// declaration --> {key:value, key:value}
const person= {
    name : "Akash",
    "age" : 22,
    accessories : ["watch", "lamp"]
} ;

// Add Key Value pair
person.gender = "male" ;
person["health"] = "well" ;


// print
console.log(person.gender) ;
console.log(person.age) ;
console.log(person["name"]) ;
console.log(person) ;