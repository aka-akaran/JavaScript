

// get and set attributes

const inputElement = document.querySelector(".form-todo input") ;

// getAttribute
console.log(inputElement.getAttribute("type")) ;

const homeLink = document.querySelector("a") ;
console.log(homeLink.getAttribute("href")) ;

// setAttribute
homeLink.setAttribute("href", "https://www.google.com/") ;
console.log(homeLink.getAttribute("href")) ;