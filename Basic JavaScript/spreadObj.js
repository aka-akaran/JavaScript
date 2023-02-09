

// NOTE : spread is used with the iterable items

const obj1 = {
    k1 : "in obj1",
    k2 : "v2"
}


const obj2 = {
    k1 : "in obj2",
    k3 : "v3"
}


// if we are spreading itreables in the obj then we get the key as its index value

const newObj = {...obj1, ..."cap", ...obj2} ;
console.log(newObj) ;

// Note : value of k1 is overwitten by k1 value in obj2 as its spreading after obj1
// Note : cap is spreading with the keys as the index values

