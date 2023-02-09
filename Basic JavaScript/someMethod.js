

// some func ->return true if any iterable satisfy callback function


const arr = [3,44,4,34,3,2] ;

function isEven(num){
    return num%2===0 ;
}

const ans = arr.some(isEven) ;
console.log(ans) ;


// NOTE : callback function all returns boolean value


// real world example
const userCart = [
    {productId : 1, productName : "Tshirt", price : 3500},
    {productId : 2, productName : "Jeans", price : 2700},
    {productId : 3, productName : "trimmer", price : 3000},
    {productId : 4, productName : "lamp", price : 300},

]


const anyExpensive = userCart.some(product=>product.price>=5000) ;
console.log(anyExpensive) ;