

function CreateUser(firstName, age){
    this.firstName = firstName ;
    this.age = age ;
}

CreateUser.prototype.gender = "M" ;
CreateUser.prototype.about = function(){
    return `${this.firstName}, ${this.age}` ;
}



const user1 = new CreateUser("akash", 23) ;

for(let key in user1){
    console.log(key) ;
}

console.log("\n") ;

// printing the keys defined in the user1 only
for(let key in user1){
    if(user1.hasOwnProperty(key)){
        console.log(key) ;
    }
}
