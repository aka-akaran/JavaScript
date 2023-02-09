
// status tells the current status of the request
// response gives the JSON file


// after fetching URL fetch "https://jsonplaceholder.typicode.com/posts/4"
// where 4 is the id of the fourth object in the JSON file 

const URL = "https://jsonplaceholder.typicode.com/posts" ;
const xhr = new XMLHttpRequest() ;
xhr.open("GET", URL) ;

xhr.onload = () =>{
    if(xhr.status>=200 && xhr.status<300){
        const data = JSON.parse(xhr.response) ;
        const id = data[3].id ;
        const newURL = URL + "/" + id ;
        // now send the another request from the newURL
        const xhr2 = new XMLHttpRequest() ;
        xhr2.open("GET", newURL) ;
        xhr2.onload = ()=>{
            if(xhr2.status>=200 && xhr2.status<300){
                const newData = JSON.parse(xhr2.response) ;
                console.log(newData) ;
            }
            else{
                console.log("error", xhr2.status) ;
            }
        }
        xhr2.send() ;
    }
    else{
        console.log("error", xhr.status) ;
        console.log("Unsuccessful request sending") ;
    }
}



// for network error use onerror
xhr.onerror = ()=>{
    console.log("Unsuccessful Network Establishment") ;
}

xhr.send() ;