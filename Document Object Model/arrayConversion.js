


let navItems = document.getElementsByTagName("a") ;
console.log(Array.isArray(navItems)) ;


// conversion to array --> beware of using let instead of const
navItems = Array.from(navItems) ;
console.log(Array.isArray(navItems)) ;