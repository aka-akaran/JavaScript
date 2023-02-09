

// getting class List of html element

const sectionTodo = document.querySelector(".section-todo") ;
console.log(sectionTodo) ;

// modify class
sectionTodo.classList.add("bg-dark") ;
sectionTodo.classList.remove("bg-dark") ;

// check class
console.log(sectionTodo.classList.contains("container")) ;


// toggle ->if present then removes, if not present then add
sectionTodo.classList.toggle("bg-dark") ;
sectionTodo.classList.toggle("bg-dark") ;
