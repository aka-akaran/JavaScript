

// on resolving the promise we are returning the JSON file

const URL = "https://jsonplaceholder.typicode.com/posts" ;

function sendRequest(method, url){
    return new Promise((resolve, reject)=>{
        const xhr = new XMLHttpRequest() ;
        xhr.open(method, url) ;
        xhr.onload = function(){
            if(xhr.status>=200 && xhr.status<300){
                resolve(xhr.response) ;
            }
            else{
                reject(xhr.status) ;
            }
        }
        xhr.onerror = ()=>{
            reject(new Error("Failed Network Connection"))
        }
        xhr.send() ;
    })   
}


sendRequest("GET", URL)
    .then(response =>{
        const data = JSON.parse(response) ;
        return data ;
    })
    .then(data =>{
        const id = data[3].id ;
        const newUrl = URL + "/" + id ;
        return sendRequest("GET", newUrl) ;
    })
    .then(newResponse =>{
        const data2 = JSON.parse(newResponse) ;
        console.log(data2) ;
    })
    .catch(error=>{
        console.log("error", error) ;
    })


