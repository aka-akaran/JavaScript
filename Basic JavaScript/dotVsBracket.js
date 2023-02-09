

// with dot notation we can't access keys that contain spaces, for such keys we use bracket
// when you have to get key from some other varialble then also we use brackests


const person = {
    // key contains spaces
    "first name" : "akash"
}

console.log(person["first name"]) ;
// we can't do
// console.log(person.first name) ;



// get keyname from variable
const key = "contact" ;
person[key] = 453543456567 ;
console.log(person) ;