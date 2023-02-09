

// mdn event reference


const button = document.querySelector(".btn-headline") ;

// Method1 - directly in the html file

// Method2 
// button.onclick = function(){
//     console.log("you clicked headline button") ;
// }

// Method3
button.addEventListener("click", ()=>{
    console.log("clicked headline button") ;
})


