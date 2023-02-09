

// methods
// this points to current object
// not working with arrow function

const person = {
    firstName : "Akash", 
    age : 23,
    about : function(){
        // you can't access without this keyword because firstName is not defined it's just a key of the object
        // console.log(`hi I am ${firstName}, and I am ${age} years old`) ;
        console.log(`hi I am ${this["firstName"]}, and I am ${this.age} years old`) ;
        // two ways of accessing map values
    }
}

console.log(person["about"]) ;
person.about() ;
person["about"]() ;



console.log("\n") ;
console.log("\n") ;
console.log("\n") ;




// more simplified

const intro  = function(){
                console.log(`Hello myself ${this.firstName}, and I am ${this.age} years old`) ;
            }


const person1 = {
    firstName : "Harsh", 
    age : 23,
    about : intro ,
}


const person2 = {
    firstName : "Harshit", 
    age : 20,
    about : intro,
}


const person3 = {
    firstName : "Harshita", 
    age : 25,
    about : intro ,
}


person1.about() ;
person2.about() ;
person3.about() ;

