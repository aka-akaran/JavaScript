

const body = document.body ;
const grandParent = document.querySelector(".grandparent") ;
const parent = document.querySelector(".parent") ;
const child = document.querySelector(".child") ;


// event bubbling

child.addEventListener("click", ()=>{
    console.log("clicked child") ;
})

parent.addEventListener("click", ()=>{
    console.log("clicked parent") ;
})

grandParent.addEventListener("click", ()=>{
    console.log("clicked grandParent") ;
})

body.addEventListener("click", ()=>{
    console.log("clicked body") ;
})