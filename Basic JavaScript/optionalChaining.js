

// optioanl chaining --> mainly used in nested objects

// used to prevent error when we access some property which is not present now
// but later they can be present


const person1 = {
    firstName : "Akash",
    contact : {phoneNo : 342,
                mail : "asdf@ork.com"} ,
}

// if person1 is not undefined then give person1.firstName
console.log(person1?.firstName) ;
console.log(person1?.contact?.mail) ;
