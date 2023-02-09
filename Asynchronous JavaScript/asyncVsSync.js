

// synchronous vs asynchronous JS

// synchronous --> in orderly manner/ line wise

// asynchronous --> call in any order with the help of browser API
// JS apna kaam karegi, web browser GEC(global execution context) ke over hone tk 
// apnaa kaam callback queue mein rakh degi and upon finishing GEC callback queue execute hogi

// ye sb event loop handel krtaa hai

console.log("JS starts here!!") ;

setTimeout(()=>{
    console.log("first setTimeOut Callback") ;
}, 1000) ;
// 1000 ms = 1sec ;

console.log("script ends !!!") ;


// bhale hi 0ms hon, web kaa kaam pehle callBack queue mein jaaega
// callStack empty hone pr hi callBack Queue ke tasks perform honge

console.log("script starts again!!") ;

setTimeout(()=>{
    console.log("second setTimeOut Callback") ;
},0) ;

for(let i = 0; i<10; i++){
    console.log(i) ;
}

console.log("script ends again here!!!") ;



// NOTE : callback queue starts execution after callback stack only
