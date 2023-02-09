

class Animal{
    consturctor(name, age){
        this.name = name ;
        this.age = age ;
    }

    canWalk(){
        return true ;
    }
    isCute(){
        return true ;
    }
    isWild(){
        return age>=15 ;
    }
}


class Dog extends Animal{
    canBark(){
        return true ;
    }
}


const tommy = new Dog("tommy", 7) ;
console.log(tommy.canWalk()) ;
console.log(tommy.canBark()) ;