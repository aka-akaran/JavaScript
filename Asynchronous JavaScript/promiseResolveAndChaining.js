

// then() always return promise
// therefore helps in creating the promise chain

// then mein hum function defined kr dete hain jo resolve hone pr call ho
// catch mein hum function defined kr dete hain jo reject hone pr call ho



const myPromise = Promise.resolve("done") ;
myPromise.then((status)=>{
    console.log(status) ;
})



function myPromisefunc(){
    return new Promise((resolve, reject)=>{
        resolve("akash") ;
    })
}


// then return the promise
// return Promise.resolve(firstName) ;
// if then does not return anything then JS returns undefined Promise
// return Promise.resolve(undefined) ;

myPromisefunc()
    .then(firstName=>{
        console.log(firstName, "fulfilled the promise") ;
        firstName += " "+ "singh" ;
        return firstName ;
    })
    .then(firstName=>{
        console.log(firstName, "fulfilled the promise") ;
    })
    .then(firstName=>{
        console.log(firstName, "fulfilled the promise") ;
    })