
// on object creation constructor is called
// we can't called constructor without new keyword

class CreateUser{
    constructor(firstName, age){
        console.log("constructor called") ;
        this.firstName = firstName ;
        this.age = age;
    }

    isAdult(){
        return this.age>=18 ;
    }
    sing(){
        return "la la la" ;
    }
    about(){
        return `${this.firstName}, ${this.age}` ;
    }
}



const user1 = new CreateUser("akash", 23) ;

console.log(user1.about()) ;