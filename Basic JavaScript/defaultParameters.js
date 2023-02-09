

// before Modern Js was introduced

function minus(a, b){
    if(b===undefined) b = 0 ;
    return a-b ;
}

// In Modern Js
function add(a, b=0){
    return a+b ;
}

console.log(minus(2)) ;
console.log(add(5)) ;
