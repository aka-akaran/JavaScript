


const cities = ["delhi", "kanpur", "banglore", "kota", "udaipur", "ajmer"] ;

let [metro1, metro2] = cities ;
console.log(`${metro1}, ${metro2}`) ;

let[m1, , m3] = cities ;
console.log(`${m1}, ${m3}`) ;


// works like slicing
// skips first 3 then stores in the array via spread operator
let [, , , ...nonMetro] = cities ;
console.log(nonMetro) ;



// Undefined for no element
const countries = ["India", "Australia"] ;
const [c1, c2, c3] = countries ;
console.log(c3) ;