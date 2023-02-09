
const doSomething = () =>{

    // declaring functions inside functions
    const wish = () => console.log("Have a Nice Day") ;
    const isEven = function(num){
        if(num&1) return false ;
        return true ;
    }
    function findSum(num1, num2){
        return num1 + num2 ;
    }


    // calling inside Functions
    wish() ;
    console.log(isEven(10)) ;
    console.log(findSum(4,90)) ;

}


doSomething() ;
