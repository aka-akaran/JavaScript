

// keypress Event

const body = document.body ;
body.addEventListener("keypress", (e)=>{
    console.log(e.key) ;
})


const button = document.querySelector(".container button") ;
button.addEventListener("mouseover", ()=>{
    console.log("mouseOver event occured") ;
})

button.addEventListener("mouseleave", ()=>{
    console.log("mouseLeave event occured") ;
})