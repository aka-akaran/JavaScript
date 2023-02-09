
console.log("script starts !!!") ;

const allButtons = document.querySelectorAll(".my-buttons button") ;

allButtons.forEach((button)=>{
    button.addEventListener("click", (e)=>{
        for(let i = 0; i<1000050000; i++) continue ;
        console.log(e.currentTarget.textContent) ;
    })
})


for(let i = 0; i<10000000; i++) continue ;

console.log("script end!!!") ;


// jb tk global execution context khatm nahi hota tb tk jS events callback queue mein wait karenge 