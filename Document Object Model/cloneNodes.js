


const ul = document.querySelector(".todo-list") ;
const li = document.createElement("li") ;
li.textContent = "new List Item" ;
const li2 =  li.cloneNode(true) // deepCloning if true

ul.append(li) ;
ul.prepend(li2) ;