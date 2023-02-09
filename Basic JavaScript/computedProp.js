

// In object values can be computed form the variable, but how to compute keys


const k1 = "contact" ;
const k2 = "mail" ;

const v1 = 34535 ;
const v2 = "hello@orkut.com" ;


// Method1 --> define keys in square brackets
const person = {
    [k1] : v1, 
    [k2] : v2
}
console.log(person) ;


// Method 2 -->declare object then for each key define value
const person2 = {} ;
person2[k1] = v1 ;
person2[k2] = v2 ;
console.log(person2) ;