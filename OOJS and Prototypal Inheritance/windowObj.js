"use strict" ;


// this is window object ;

console.log(this) ;
console.log("\n") ;


// every function defind directly become the part of window object
function hello(){
    console.log("fuck U!!") ;
    console.log(this) ;
    console.log("\n") ;
}

hello() ;
window.hello() ;
this.hello() ;
console.log(this===window) ;


// to protect calling this inside function we use "use strict" ;
// "use strict for undefined output and otherwise window object is called"