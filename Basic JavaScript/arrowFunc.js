

// function expression
const isEven = function(num){
    if(!(num&1)) return true ;
    return false ;
}
const ans = isEven(9) ;
console.log(ans) ;





// NOTE : In the function expressions remove function keyword and after parameters put '=>'


const paaniDo = () =>{
    console.log("Saabi Ji Paani") ;
}
paaniDo() ;



// In Case of single parameter we can remove parenthesis
const checkEven = (num)=>{
    if(num&1) return false ;
    return true ;
}

const even = checkEven(10) ;
console.log(even) ;


// When there is single statement in the arrow function then we can remove the {} also

// there is a wish function with no parameter that prints statement
const Wish = () => console.log("happy birthday to you") ;
Wish() ;