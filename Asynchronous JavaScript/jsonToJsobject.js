

const URL = "https://jsonplaceholder.typicode.com/posts" ;
const xhr = new XMLHttpRequest() ;
xhr.open("GET", URL) ;
xhr.onreadystatechange = function(){
    if(xhr.readyState==4){
        const response = xhr.response ;
        const data = JSON.parse(response) ;
        console.log(typeof data) ;
        console.log(data) ;
    }
}

xhr.send() ;