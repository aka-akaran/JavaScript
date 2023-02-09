



// getElementsByTagName -->gives HTML collection
const navItems = document.getElementsByTagName("a") ;

// regular for loop, for of loop, forEach doesn't work for HTML collection iteration

for(let i = 0; i<navItems.length; i++){
    const navItem = navItems[i] ;
    navItem.style.backgroundColor = "white" ;
    navItem.style.color = "red" ;
    navItem.style.fontWeight = "bold" ;
}









// querySelectorAll --> gives NodeList
const formGroups = document.querySelectorAll(".form-group") ;

// all type of for loop works for the NodeList
formGroups.forEach((formDescription)=>{
    formDescription.style.color = "blue" ;
})