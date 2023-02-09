

// When a function is called Function Execution Context is called like Global Execution Context
// 1) Local Memory Execution Phase
// 2) Local Code Execution Phase

// argument names are initialised in array like objects
// then argument name are initialised with arguments values
// then same as global memory creation phase

let bark = "bark" ;
console.log(bark) ;

function getFullName(firstName, lastName){
    console.log(arguments) ;
    let myVar = "var inside function" ;
    console.log(myVar) ;
    const fullName = firstName + " " + lastName ;
    return fullName ;
}

const personName = getFullName("Akash", "Singh") ;
console.log(personName) ;