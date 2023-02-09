


function myFunc(){
    
    function hello(){
        console.log("bhag yahan se") ;
    }
    
    return hello ;

}

const ans = myFunc() ;
// ans stores func as myFunc returns function
console.log(ans) ;
ans() ;