

// when we want to call any function only 'n' times


function func(){
    let counter = 0 ;
    return function(){
        if(counter<1){
            console.log("Hey you called me!") ;
            counter++ ;
        }
        else{
            console.log("already Called") ;
        }
    }
}


// console helps because console takes the local variable with it


const myFunc = func() ;
myFunc() ;
myFunc() ;
myFunc() ;