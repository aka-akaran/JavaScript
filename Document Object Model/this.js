

// in case of function decleration this = calling Object
// in case of arrow function this = next lexical object

const button = document.querySelector(".btn-headline") ;

button.addEventListener("click", ()=>{
    console.log("arrow function this") ;
    console.log(this) ;
})


// button.addEventListener("click", function(){
//     console.log("function decleration this") ;
//     console.log(this) ;
// })