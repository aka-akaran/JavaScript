

// arrow function doesn't have this
// arrow function takes this from above level


const person = {
    firstName : "akash", 
    age : 23,
    about : ()=>{
        console.log(this.firstName, this.age) ;
    }
}


person.about() ;


// Also we can't change this of the arrow function
person.about.call(person) ;