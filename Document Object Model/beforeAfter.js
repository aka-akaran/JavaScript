

// before -->before starting of the particular tag
// after --> after ending of the particular tag

const todoItem = document.querySelector(".todo-list") ;
const newTodoItem = document.createElement("li") ;
newTodoItem.textContent = "new to do list item" ;



// Before
todoItem.before(newTodoItem) ;


// after
todoItem.after(newTodoItem) ;



// NOTE : either before works or after whoever is applied lately, both can't be applied as 
// newTodoItem is single node