
// both gives array like objects


// get multiple elements using getElementsByClassName -->gives HTML collection
const navItems = document.getElementsByClassName("nav-item") ;
console.log(navItems[0], navItems[1], navItems[2]) ;
console.log(navItems) ;

// get multiple elements using querySelectorAll --> gives NodeList

const formItems = document.querySelectorAll(".form-group") ;
console.log(formItems) ;