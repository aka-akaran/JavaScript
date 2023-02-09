

// prompt convert the input into string

let magicNumber = 23 ;
let guess = prompt("Guess the number") ;

console.log(guess === magicNumber? "won" : "lose") ;
guess = +guess ;
console.log(guess === magicNumber? "won" : "lose") ;