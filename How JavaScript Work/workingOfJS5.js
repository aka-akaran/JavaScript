

// when local execution context does not find the variable then
// it looks for the variable in it's parent execution context
// until it reaches global code execution

const lastName = "Singh" ;

function printName(){
    const firstName = "Akash" ;
    console.log(firstName) ;
    console.log(lastName) ;
}

printName() ;