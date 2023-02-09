

const p1 = {
    firstName : "akash",
    age : 23,
}

// create empty object with its __proto__ as p1
const p2 = Object.create(p1) ;
p2.gender = "M" ;


console.log(p2.firstName) ;
console.log(p2.__proto__) ;

// __proto__ or [[protopype]] creates reference to another object
// if currObj does not have some key then it can bring from its __proto__
