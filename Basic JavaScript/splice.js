

// splice 
// start, delete, insert


const fruits = ["apple", "mango", "banana", "pear"] ;

// Method1 --> delete in between (startInd, noOfItemsToDelete)
// when deleting splice method also returns the deleted item
fruits.splice(1, 2) ;
console.log(fruits) ;



// Method 2 --> Insert at startIndx
fruits.splice(1, 0, "waterMelon") ;
console.log(fruits) ;



// Method 3 --> Insertion and Deletion at Same time
// (startIndx, noOfItemsToDelete, Value of Items to be inserted at startInd)
fruits.splice(0, 1, "strawBerry", "Chiku") ;
console.log(fruits) ;
