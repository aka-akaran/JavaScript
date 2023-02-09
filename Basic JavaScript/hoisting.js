
// Hoisting - Use of function before decleration
// NOTE : Works only in case of function decleration and not in case of function expression and arrow function




const ans = isEven(9) ;
console.log(ans) ;

function isEven(num){
    if(!(num&1)) return true ;
    return false ;
}


