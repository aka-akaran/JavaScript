

// reduce --> accumulate the currValue in the accumulator according to the relation between accumulator and currValue
// by default value of accumulator is 0 ;

// arr.reduce(f(accumulate, currvalue), initialize accumulator)


const arr = [3,4,3,34,5,423] ;

const sum = arr.reduce((accumulator, currValue)=>accumulator+currValue) ;
console.log(sum) ;



// real world example

const userCart = [
    {productId : 1, productName : "Tshirt", price : 2300},
    {productId : 2, productName : "Jeans", price : 2700},
    {productId : 3, productName : "trimmer", price : 3000},
]


const cartAmount = userCart.reduce((totalAmount, currProduct)=>{
    return totalAmount + currProduct.price ;
}, deliveryFee = 80) ;

console.log(cartAmount) ;