

// Callback function --> when we pass function as a parameter then we name if as callback(convention, not necessary)

function bullaLe(){
    console.log("Bulla Liya") ;
}

function doSomething(callback){
    console.log("khaana khane ke liye bulaa le") ;
    callback() ;
}

doSomething(bullaLe) ;