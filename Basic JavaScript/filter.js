

// filter method

// NOTE : filter function must return bool value

// Array.filter(f(y)) --> filter the array on the basis of the f(y) function

const numbers = [2,3,,6,4,3,5,67,54] ;

const evenNum = numbers.filter(function(num){
    return num%2===0 ;
})

console.log(evenNum) ;