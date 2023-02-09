
// XML HTTP Request
// mdn xhr readystate -- what is the meaning of state number
// https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState


// Value	State	            Description
// 0	    UNSENT	            Client has been created. open() not called yet.
// 1	    OPENED	            open() has been called.
// 2	    HEADERS_RECEIVED	send() has been called, and headers and status are available.
// 3	    LOADING	            Downloading; responseText holds partial data.
// 4	    DONE	            The operation is complete.






// api
const URL = "https://jsonplaceholder.typicode.com/posts" ;

const xhr = new XMLHttpRequest() ;
// console.log(xhr) ;
console.log(xhr.readyState) ;       //value 0 before open

xhr.open("GET", URL) ;              //xhr request via url

console.log(xhr.readyState) ;       //value 1 after open has been called

// calls function whenever readystate changes
xhr.onreadystatechange = function(){
    console.log(xhr.readyState) ;
    if(xhr.readyState==4){
        console.log(xhr.response) ; //type of xhr response is string
        // console.log(typeof xhr.response) ;
    }
}


xhr.send() ;                        //value changes from 2 to 3 to 4 according to the state


