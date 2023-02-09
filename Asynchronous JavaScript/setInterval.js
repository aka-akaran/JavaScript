

// setInterval --> after particular ms check if the callstack is empty to execute the callback queue

console.log("script ends here!!!") ;

setInterval(()=>{
    console.log("setInterval Callback") ;
},1000) ;

console.log("script starts here!!!!") ;