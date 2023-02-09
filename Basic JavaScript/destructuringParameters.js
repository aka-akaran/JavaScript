

// when you know that parameters can be destructured

const person1 = {
    firstName : "Akash" ,
    Gender : "M" ,
}

function personDetails({firstName, Gender, Age}){
    console.log(firstName) ;
    console.log(Gender) ;
    console.log(Age) ;
} ;

personDetails(person1) ;