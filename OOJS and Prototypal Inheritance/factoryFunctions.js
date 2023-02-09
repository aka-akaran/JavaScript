

// create a function that returns object
// therefore no need to define each object, just pass the details and get the object

function createUser(firstName, age){
    user = {};
    user.firstName = firstName ;
    user.age = age ;
    user.info = function(){
        console.log(this.firstName, this.age) ;
    }
    user.isAdult = function(){
        return age >=18 ;
    }
    return user ;
}


const user1 = createUser("akash", 23) ;
user1.info() ;

const user2 = createUser("pras", 15) ;
user2.info() ;


