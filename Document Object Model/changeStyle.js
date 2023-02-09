

// style is also an object

// select the h2 inside div with headline class

const mainHeading = document.querySelector("div.headline h2") ;
console.log(mainHeading) ;

// ERROR -- Only supports camelCase
// mainHeading.style.background-color = "blue" ;
mainHeading.style.backgroundColor = "blue" ;