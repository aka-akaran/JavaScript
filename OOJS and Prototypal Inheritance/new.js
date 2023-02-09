

// new --> create __proto__ as function.prototype

// new --> Initialise this as {} inside the function with its __proto__ as function.prototype


function CreateUser(firstName, age){
    this.firstName = firstName ;
    this.age = age ;
}

CreateUser.prototype.gender = "M" ;
CreateUser.prototype.about = function(){
    return `${this.firstName}, ${this.age}` ;
}

/*
above line creates object

{
    gender : "M" ,
}


*/


const user1 = new CreateUser("akash", 23) ;

/*
above line initialize __proto__ to this object to the function.prototype
and return this object
const user1 = createUser(firstName, age){
    this = Object.create(createUser.prototype) ;
    this.firstName = firstName,
    this.age = age ,
}


*/

console.log(user1.gender) ;
console.log(user1.about()) ;






// new -->
// 1) this = {}
// 2) return this
// 3) this = Object.create(function.prototype) ;
// by convention the functions which use new keyword for initialization starts with capital Letter
