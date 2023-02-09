

const button = document.querySelector(".container button") ;
const body = document.body ;
const currColor = document.querySelector(".current-color") ;

function randomColorGenerator(){
    const red = Math.floor(Math.random()*256) ;
    const green = Math.floor(Math.random()*256) ;
    const blue = Math.floor(Math.random()*256) ;
    const randomColor = `rgb(${red}, ${green}, ${blue})` ;
    return randomColor ;
}


button.addEventListener("click", (e)=>{
    const randomColor = randomColorGenerator() ;
    currColor.textContent = randomColor ;
    body.style.backgroundColor = randomColor ;
}) ;
