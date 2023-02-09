
// pehle event capturing hoti hai(outer to inner) phir event bubbling hoti hai (inner to outer)



const body = document.body ;
const grandParent = document.querySelector(".grandparent") ;
const parent = document.querySelector(".parent") ;
const child = document.querySelector(".child") ;


// event capturing --> third argument true in addEventListner
grandParent.addEventListener("click", ()=>{
    console.log("captured grandParent") ;
}, true)

body.addEventListener("click", ()=>{
    console.log("captured body") ;
}, true)



// event bubbling (inner to outer element)
parent.addEventListener("click", ()=>{
    console.log("bubbled parent") ;
})


child.addEventListener("click", ()=>{
    console.log("bubbled child") ;
})



// thereore no need to create seperate events for the body, grandparent, parent, child
// single event can work for them