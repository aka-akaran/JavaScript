
// fetch returns the promise

const URL = "https://jsonplaceholder.typicode.com/posts" ;

fetch(URL)
    .then(response=>{
        // returns the promise of json file
        return response.json() ;
    })
    .then(data=>{
        console.log(data) ;
    })