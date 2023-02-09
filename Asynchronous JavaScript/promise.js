
// Promise --> promises to  do the given task if input for the tasks are provided
// Promise is a feature of browser not javascript
// stores its value in the microtask queue, not in callback queue

// promise is an object with 2 keys{status and value}
// Promise status pending-->reject/ fulfilled
// Promise value --> can be anything related to the current status



// NOTE : microtask queue has more priority then callback queue


const bucket = ["coffee", "milk", "rice", "salt", "vegetables"] ;


setTimeout(()=>{
    console.log("settimeout callback") ;
}, 1000)




// Promise creation
const friedRicePromise = new Promise((resolve, reject)=>{
    if(bucket.includes("vegetables") && bucket.includes("salt") && bucket.includes("rice")){
        resolve("fried rice") ;
    }
    else{
        reject("Sory Can't fulfill promise") ;
    }
}) ;








// consume promise


friedRicePromise.then(
    // callback for resolve
    (task)=>{
        console.log("fulfilled promise of", task) ;
    },
    // callback for reject
    (error)=>{
        console.log(error) ;
    }
)



// can also do with .catch for the callback of error

friedRicePromise.then(
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




// then mein hum function defined kr dete hain jo resolve hone pr call ho
// catch mein hum function defined kr dete hain jo reject hone pr call ho
