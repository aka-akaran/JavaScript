
// onload works for the succesful load i.e. when readystate changes to 4

const URL = "https://jsonplaceholder.typicode.com/posts" ;
const xhr = new XMLHttpRequest() ;
xhr.open("GET", URL) ;

xhr.onload = ()=>{
    console.log(xhr.readyState) ;
}

xhr.send() ;