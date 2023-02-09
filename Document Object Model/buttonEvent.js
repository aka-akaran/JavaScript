

// add event to all buttons

const allButtons = document.querySelectorAll(".my-buttons button") ;


// now you can iterate the allButtons list and add functionality one by one
for(let button of allButtons){
    button.addEventListener("click", function(){
        console.log(this) ;
    })
}



// allButtons.forEach(function(button){
//     button.addEventListener("click", function(){
//         console.log(this) ;
//     })
// })