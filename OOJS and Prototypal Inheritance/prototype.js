

// function in JS is function as well as object
// function provides us free space called prototype

// prototype is provided because at later stage if we have to add key, value pair in the function then we can add it
// NOTE : Only functions have prototype


const hello = function(){
    return "Hello friends" ;
}

// add key,value using prototype
hello.prototype.sing = function(){
    return "la la la" ;
}

console.log(hello.prototype.sing()) ;