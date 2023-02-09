

// primitive data are stored in stack memory
// reference date are stored in heap memory and address is passed


// primitive
let val1 = "akash" ;
let val2 = val1 ;
val1 = "aka_ran" ;

console.log(val1) ;
console.log(val2) ;
// you can notice that affecting the val1 does not affect val2



// reference types
let arr1 = ["kota", "jaipur"] ;
let arr2 = arr1 ;
arr1[1] = "udaipur" ;

console.log(arr1) ;
console.log(arr2) ;
// changing the arr1 changes the arr2 because in arr2 the address of arr1 is assigned
