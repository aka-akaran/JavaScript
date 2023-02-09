

// Rest Paramets - '...' -->form array of remaining parameters

function printAll(a, b, ...c){
    console.log(`a is ${a}`) ;
    console.log(`b is ${b}`) ;
    console.log(`c is ${c}`) ;
    console.log("\n") ;
}

printAll(1) ;
printAll(1,2) ;
printAll(1,2,3,4,5,6,7,8,9) ;



function findSum(...numbers){
    let sum = 0 ;
    for(let number of numbers){
        sum += number ;
    }
    return sum ;
}

const sum = findSum(1,2,3,4,5,6) ;
console.log(sum) ;