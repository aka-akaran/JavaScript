

// apply --> same as call, insted of passing parameters individually pass them in the array



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

// passes the person2 as object for the person1
allDetails.apply(person2, ["exploring hobby", "sprint"]) ;
