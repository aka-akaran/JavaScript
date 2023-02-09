

const preson1 = {
    firstName : "akash", 
    age : 23,
    about : function(){
        console.log(this.firstName, this.age) ;
    }
}


const preson2 = {
    firstName : "akash", 
    age : 23,
    about(){
        console.log(this.firstName, this.age) ;
    }
}


// both person1 and person2 are same


