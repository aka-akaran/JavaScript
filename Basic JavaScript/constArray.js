
// Advisable to use const for reference types

const arr1 = ["lota", "thali"] ;
arr1.push("magga") ;
console.log(arr1) ;


// Are we changing the val of arr1 ? 
// Ans : No, because we arr1 stores the address of the array in the heap


// Not Allowed --> Reassignment of new address to const array
// arr1 = ["shoes", "chappal"] ;
