

// async --> return promise
// await --> returns after resolving the promise




const URL = "https://jsonplaceholder.typicode.com/posts" ;

async function getPosts(){
    const response = await fetch(URL) ;
    if(!response.ok){
        // for this condition only goes to the catch block
        throw new Error("Something Went Wrong") ;
    }
    // Promise(response.json) return data on successful execution
    const data = await response.json() ;
    return data ;
    // similar to return Promise(data) ;

}

// getPosts returns promise 
getPosts()
    .then(myData=> console.log(myData))
    .catch(error=>console.log(error)) ;
