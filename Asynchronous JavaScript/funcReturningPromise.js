

// function returning promise


function ricePromise(){
    const bucket = ["coffee", "milk", "rice", "salt", "vegetables"] ;
    return new Promise((resolve, reject)=>{
        if(bucket.includes("vegetables") && bucket.includes("salt") && bucket.includes("rice")){
            resolve("fried rice") ;
        }
        else{
            reject("Sory Can't fulfill promise") ;
        }
    }) ;
    
}


ricePromise().then(
    // callback for resolve
    (task)=>{
        console.log("fulfilled promise of", task) ;
    }
).catch(
    // callback for error
    (error)=>{
        console.log(error) ;
    }
)
