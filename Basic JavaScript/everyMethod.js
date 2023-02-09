

// every func ->return true if every iterable satisfy callback function


const arr = [3,44,4,34,3,2] ;

function isEven(num){
    return num%2===0 ;
}

const ans = arr.every(isEven) ;
console.log(ans) ;


// NOTE : callback function all returns boolean value


// real world example
const products = [
    {productId : 1, productName : "Tshirt", price : 3500},
    {productId : 2, productName : "Jeans", price : 2700},
    {productId : 3, productName : "trimmer", price : 3000},
    {productId : 4, productName : "lamp", price : 300},

]


const budgetFriendly = products.every(product=>product.price<=2000) ;
console.log(budgetFriendly) ;