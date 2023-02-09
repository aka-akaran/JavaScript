
let n = prompt("enter n") ;
let linearSum = 0 ;
let squareSum = 0 ;


for(let i = 1; i<=n; i++){
    linearSum += i ;
}
console.log(linearSum) ;

// NOTE : we can't use i outside, but if we have declared it as var i then we can use it outside the for loop



let num = 1 ;
while(num<=n){
    squareSum += num**2 ;
    num++ ;
}
console.log(squareSum) ;