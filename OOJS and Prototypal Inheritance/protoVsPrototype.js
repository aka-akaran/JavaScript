
// __proto__ is used to create chain reference
// prototype is space provided by function as empty object
// function.prototype is {} i.e. empty object



function createUser(firstName, age){

    // set function prototype as __proto__ for user object
    user = Object.create(createUser.prototype);
    
    user.firstName = firstName ;
    user.age = age ;

    return user ;
}

createUser.prototype.about = function(){
    return `${this.firstName}, ${this.age}` ;
} ;

createUser.prototype.isAdult = function(){
    return this.age >=18 ;
} ;

createUser.prototype.educated = function(){
    return true ;
} ;






const user1 = createUser("akash", 23) ;
console.log(user1.about()) ;
// user1 doesn't have educated still it gets educated function from its __proto__