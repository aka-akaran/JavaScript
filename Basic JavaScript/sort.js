

// sort function sorts considering the elemests as string
// sort function can take callbacks, therefore helps in sorting the numbers

const arr = [100,20,300,40,500] ;

// consider the arr elements as String
arr.sort() ;
console.log(arr) ;


const arr2 = [100,20,300,40,500] ;

// if (a-b)>0 then put a after b in the sorted array --> increasing sort
// for decreasing sort we can do (b-a) ;
arr2.sort((a, b)=>{
    return a-b ;
})
console.log(arr2) ;



// real world example
const products = [
    {productId : 1, productName : "Tshirt", price : 3500},
    {productId : 2, productName : "Jeans", price : 2700},
    {productId : 3, productName : "trimmer", price : 3000},
    {productId : 4, productName : "lamp", price : 300},

]

const lowToHigh = products.slice(0).sort((a,b)=>a.price-b.price) ;
console.log(products) ;
console.log(lowToHigh) ;