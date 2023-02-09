

// Array Methods
// forEach
// filter
// map
// reduce




// forEach --> it uses callback function, and passes the first first parameter as array value and second argument as array indx
const users = [
    {firstName : "Harsh", Age : 23, Gender : "M"} ,
    {firstName : "Harshit", Age : 24, Gender : "M"} ,
    {firstName : "Harshita", Age : 25, Gender : "F"} ,
]

users.forEach(user=>console.log(user.firstName, user.Age, user.Gender)) ;

// NOTE : we have  passed the function as parameter in the input


