

// arr.map(f(y)) = map arr with function f(y) ;

// map -->return new modified array
// if input function of map does not return anything then map returns undefined array
// therefore you must return with the input function of map

// you don't have to iterate via loop








const nums = [1,2,3,4] ;

function square(num){
    return num*num ;
}

// map nums with square function
const squareNums = nums.map(square) ;
console.log(squareNums) ;


// this function does not return anything
function printSquare(num){
}

const squares = nums.map(printSquare) ;
console.log(squares) ;


// real world problem

const users = [
    {firstName : "Harsh", Age : 23, Gender : "M"} ,
    {firstName : "Harshit", Age : 24, Gender : "M"} ,
    {firstName : "Harshita", Age : 25, Gender : "F"} ,
]

const userNames = users.map(function(users){
    return users.firstName ;
})

console.log(userNames) ;