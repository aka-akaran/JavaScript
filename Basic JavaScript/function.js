

// declaration




// without parameters
function paniDo(){
    console.log("saab ji Paani") ;
}


// functin Expression - Assign function defination to a variable
const khaanaDo = function(){
    console.log("saab ji Khaana") ;
}




// with parameters
function findNumInd(array, target){
    for(let i = 0; i<array.length; i++){
        if(array[i]===target){
            return i ;
        }
    }
    return -1 ;
}










// calling
paniDo() ;
khaanaDo() ;

const arr = [3,4,5,6,8] ;
const ind = findNumInd(arr, 8) ;
console.log(ind) ;