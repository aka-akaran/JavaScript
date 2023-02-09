
// status tells the current status of the request

// changed the url posts -->postss
const URL = "https://jsonplaceholder.typicode.com/postss" ;
const xhr = new XMLHttpRequest() ;
xhr.open("GET", URL) ;

xhr.onload = () =>{
    if(xhr.status>=200 && xhr.status<300){
        const data = JSON.parse(xhr.response) ;
        console.log(data) ;
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