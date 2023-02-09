

// fill --> 



// Method 1 --> Initialize n length array with some value
const myArray = new Array(10).fill(-1) ;
console.log(myArray) ;


// Method 2 --> fill certain range
const myArray2 = [2,3,4,5,3,4,65,4] ;
myArray2.fill(100, 2, 5) ;
console.log(myArray2) ;
