

// Clone

// we can clone via spread operator also


const obj1 = {
    key1 : "value1",
    key2 : "value2",
};

// this will assign the address of obj1 to obj2
// const obj2 = obj1 ;

// insert the keyValue pair of obj1 to {} and then assign created object address to obj2
const obj2 = Object.assign({key3:"value3"}, obj1) ;
console.log(obj2) ;
