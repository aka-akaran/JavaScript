

// document.createElement() ;
// append/ appendChild
// prepend
// remove


// creat Html element
// first add tag then it text, or another html element

const newTodoItem = document.createElement("li") ;
const newTodoItemText = document.createTextNode("Teach Students") ;
newTodoItem.appendChild(newTodoItemText) ;
// alternate
newTodoItem.textContent = "Free" ;
console.log(newTodoItem) ;


// add html item to UI
const todoList = document.querySelector(".todo-list") ;
todoList.append(newTodoItem) ;


// remove the html element
const todo1 = document.querySelector(".todo-list li") ;
todo1.remove() ;