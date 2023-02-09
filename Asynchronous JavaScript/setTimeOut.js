


// setTimeout is a functionality of browser --> get handeled in callback queue


console.log("Script starts here!!!") ;

const id1 = setTimeout(()=>{
    console.log("setTimeout Callback")
}, 1000) ;


for(let i = 0; i<10; i++){
    console.log("counting") ;
}

console.log("setTimeout id is ", id1) ;
console.log("clearing the setTimeout for id1") ;
clearTimeout(id1) ;
console.log("script ends here!!!") ;


// because we cleared the timeout for id1 therefore it gets removed from the callback queue
// and hence does not occur