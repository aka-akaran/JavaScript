

// inner HTML - html inside selected tags


const headline = document.querySelector(".headline") ;
console.log(headline) ;

// use only for this
headline.innerHTML = "<h1>Changed Inner HTML</h1>" ;
console.log(headline) ;

// don't use for this as this render the html code again and again and making it slow
headline.innerHTML += "<button class = \"btn btn-headline \"> Learn More </button>" ;
console.log(headline) ;




