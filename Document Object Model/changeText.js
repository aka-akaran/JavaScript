

// change text -->textContent, innerText


const mainHeading = document.getElementById("main-heading") ;
console.log(mainHeading.textContent) ;

// textContent -->gives displayed as well as not displayed(hidden) text
mainHeading.textContent = "Heading Changed" ;
console.log(mainHeading.textContent) ;



// innerText -->Only gives the text which is visible
console.log(mainHeading.innerText) ;
