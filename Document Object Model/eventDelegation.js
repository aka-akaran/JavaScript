

// add event to grandparent, and get the corresponding target from it

const grandParent = document.querySelector(".grandparent") ;

grandParent.addEventListener("click", (e)=>{
    console.log(e.target) ;
})

