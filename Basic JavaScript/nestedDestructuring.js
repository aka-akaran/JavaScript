

const users = [
    {id : 1, name : "Harsh", gender : "M"},
    {id : 2, name : "Harshit", gender : "M"},
    {id : 3, name : "Harshita", gender : "F"},
] ;


const[user1, user2, user3] = users ;


// saved the user1 name in the variable name firstUserName
// skipped the destructuring of the second user
// saved the user3 gender in the variable name user3Gender

const[{name:firstUserName}, , {gender:user3Gender}] = users ;
console.log(firstUserName) ;
console.log(user3Gender) ;


// NOTE : first destructure the array then destructure the object

