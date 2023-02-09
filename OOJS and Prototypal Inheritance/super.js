

class Animal{
    consturctor(name, age){
        this.name = name ;
        this.age = age ;
    }

    canWalk(){
        return true ;
    }
}


class Lion extends Animal{
    constructor(name, age, speed){
        super(name, age) ;
        this.speed = speed ;
    }

    run(){
        console.log(this.name) ;
        console.log(this.age) ;
        console.log(this.speed) ;
        return `${this.name} runs at speed of ${this.speed} kmph` ;
    }
}


const sher = new Lion( "babbar", 7, 40) ;
console.log(sher.run()) ;