

function getNumAndAdd(number1, number2, callback){
    if(typeof number1 ==="number" && typeof number2 === "number"){
        callback(number1, number2) ;
    }
    else{
        console.log("Input Datatype other than numbers") ;
    }
}


function add(num1, num2){
    console.log(num1+num2) ;
}


getNumAndAdd(2,3, add) ;