

// before we have defined the methods in the objects
// but each object initialization will define that function and it every object
// and consumed more space

// therefore we can save space by defining our methods in another object
// and pass its reference



const userMethods = {
    
    info(){
        return `${this.firstName}, ${this.age}` ;
    },
    isAdult(){
        return this.age >=18 ;
    },
    educated(){
        return true ;
    },

}


function createUser(firstName, age){

    // set userMethods as __proto__ for user object
    user = Object.create(userMethods);
    user.firstName = firstName ;
    user.age = age ;
    user.about = userMethods.info ;
    user.isAdult = userMethods.isAdult ;

    return user ;
}


const user1 = createUser("akash", 23) ;

// user1 doesn't have educated still it gets educated function from its __proto__
console.log(user1.educated()) ;



// Therefore __proto__ helps if we forgoet to mention some keys,value we can have access from its __proto__
