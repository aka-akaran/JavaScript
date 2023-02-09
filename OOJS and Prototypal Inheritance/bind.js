

// bind --> binds the function and object with some values and returns the new function




function allDetails(hobby, favSports){
    console.log(this.firstName, this.age, hobby, favSports) ;
}



const person1 = {
    firstName : "akash",
    age : 23,

}

const person2 = {
    firstName : "pras" ,
    age : 15,
}

const newDetails = allDetails.bind(person2, "nachna", "football") ;
newDetails() ;
