

const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");
const heading8 = document.querySelector(".heading8");
const heading9 = document.querySelector(".heading9");
const heading10 = document.querySelector(".heading10");


function changeText(element, text, color, time) {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
          if(element){
            element.textContent = text;
            element.style.color = color;
            resolve() ;
          }
          else{
            reject("Element not found") ;
          }
        },time)
    })
}


// if we don't return anything from then, then undefined is returned
// if catch is called then we can't go for further resolve 

changeText(heading1, "One", "red", 1000)
    .then(()=>changeText(heading2, "Two", "blue", 1000))
    .then(()=>changeText(heading3, "Three", "green", 2000))
    .then(()=>changeText(heading4, "Four", "violet", 4000))
    .then(()=>changeText(heading5, "Five", "orange", 2000))
    .then(()=>changeText(heading6, "Six", "cyan", 2000))
    .then(()=>changeText(heading7, "Seven", "grey", 1000))
    .then(()=>changeText(heading8, "Eight", "pink", 2000))
    .then(()=>changeText(heading9, "Nine", "red", 2000))
    .then(()=>changeText(heading10, "Ten", "green", 2000))
    .catch((error)=>{
        alert(error) ;
    })

