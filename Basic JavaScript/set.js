

// sets -->iterable
// new keyword is used
// No ordering
// no index based access
// stores unique elements
// have its own methods
// can store different data types





// Insertion


// Method 1
const nums = new Set([1,2,3,3]) ;
console.log(nums) ;


// Method 2
nums.add("apple") ;
console.log(nums) ;


// Arrays are different when they have different address
nums.add([20,30,40]) ;
nums.add([20,30,40]) ;
console.log(nums) ;



// Found

// Method 1
const found = nums.has(6) ;
console.log(found) ;




// count length of set, set doesnt have length method

let length = 0 ;
for(let num of nums){
    length++ ;
}
console.log(length) ;