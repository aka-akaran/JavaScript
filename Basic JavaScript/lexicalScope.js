

Lexical Scope --> area in which it is defined


const myVar = "Outside doSomething function" ;

const doSomething = () =>{

    const myVar = "Outside printVar function" ;

    function printVar(){
        // const myVar = "Inside printVar function" ;
        console.log(myVar) ;
    }


    // calling inside Functions
    printVar() ;

}

// print after commenting myVar one by one --> it is printed form the next lexical scope
doSomething() ;


