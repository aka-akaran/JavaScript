


function printName(firstName, lastName){
    function print(){
        console.log(firstName, lastName) ;
    }
    return print ;
}

const ans = printName("akash", "singh") ;

// we now know that
// ans = function(){
//     console.log(firstName, lastName) ;
// }
// but we don't have firstName and lastName in curr as well as lexical environment

ans() ;


// closure helps in this. But How?
// when function returns function, then the returning function
// also takes the local variable of that function
// while returning for future use
