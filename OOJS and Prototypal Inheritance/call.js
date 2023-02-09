

// call -->helps in passing desired object



function allDetails(hobby, favSports){
    console.log(this.firstName, this.age, hobby, favSports) ;
}



const person1 = {
    firstName : "akash",
    age : 23,
    intro : function(){
        console.log(this.firstName, this.age) ;
    },
}

const person2 = {
    firstName : "pras" ,
    age : 15,
}

// passes the person2 as object for the person1
person1.intro.call(person2) ;

// passing the object as well as parameters
allDetails.call(person1, "sapneDekhnaa", "sprint") ;

