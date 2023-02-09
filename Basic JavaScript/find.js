

// find use callback function


// real world example
const products = [
    {productId : 1, productName : "Tshirt", price : 3500},
    {productId : 2, productName : "Jeans", price : 2700},
    {productId : 3, productName : "trimmer", price : 3000},
    {productId : 4, productName : "lamp", price : 300},

]


const myProduct = products.find(product => product.productId===3) ;
console.log(myProduct) ;