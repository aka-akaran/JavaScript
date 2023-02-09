
const person = {
    firstName : "Akash" ,
    age : 23,
    about : function(){
        console.log(this.firstName, this.age) ;
    }
}


// const info  = function(){
//     console.log(this.firstName, this.age) ;
// }

// same as above
const info = person.about ;
info() ; //undefined because it doesn't have reference to this
