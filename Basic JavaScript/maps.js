

// Maps -->new keyword is used
// map is an iterable, therefore can use for of loop

// stored data in ordered fashion

// store key value pair of arrayobjects
// duplicate keys are not allowed like objects

// difference b/w maps and objects

// Object can only have string or symbol as its key
// maps can have anything as keys like arrays, number string






// decleration

// method 1
const cities = new Map() ;

// Method 2 --stores array of key, value 
const names = new Map([["personName", "Akash"],
                        ["animalName", "dobby"]]) ;




// Insertion
cities.set("Rajasthan", ["Kota", "Jaipur", "Ajmer"]) ;
cities.set(1,"nanital") ;
console.log(cities) ;




console.log("\n") ;




// get array of keys
const states = cities.keys() ;
console.log(states) ;





console.log("\n") ;



// iterate map via key arrays
for(let key of cities.keys()){
    // get key value of map
    console.log(cities.get(key)) ;
}





console.log("\n") ;




// printing key and values
for(let [key, value] of cities){
    console.log(key, value) ;
}
// Note : you have destructured the [key, value] because the map stores the key value pair in the array




console.log("\n") ;




// real world usage

const person1 = {
    firstName : "akash",
    age : 22
}

const person2 = {
    firstName : "akashita",
    age : 25
}


// add extra details of persons in the map

const extraInfo = new Map() ;
extraInfo.set(person1 , {gender : "M", lastName : "singh"}) ;
extraInfo.set(person2 , {gender : "F", lastName : "guptill"}) ;

// get the lastName of person1 from extraInfo
console.log(extraInfo.get(person1).lastName) ;
