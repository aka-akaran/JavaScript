

const todoForm = document.querySelector(".form-todo") ;
const todoInput = document.querySelector(".form-todo input[type='text']") ;
const todoList = document.querySelector(".todo-list") ;

todoForm.addEventListener("submit", (e)=>{

    // preventing page reloading
    e.preventDefault();

    const newTodoText = todoInput.value ;
    const liNext = document.createElement("li") ;
    liNext.innerHTML = `
    <span class="text">${newTodoText}</span>
    <div class="todo-buttons">
      <button class="todo-btn done">Done</button>
      <button class="todo-btn remove">Remove</button>
    </div>
    `
    todoList.append(liNext) ;


});


// event delegation

todoList.addEventListener("click", (e)=>{
    if(e.target.classList.contains("done")){
        const liSpan = e.target.parentNode.previousElementSibling ;
        liSpan.style.textDecoration = "line-through" ;
    }
    // maine jispr click kia hai usi ek class remove hai
    if(e.target.classList.contains("remove")){
        const targetedLi = e.target.parentNode.parentNode ;
        targetedLi.remove() ;
    }
})