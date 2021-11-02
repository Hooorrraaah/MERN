const rotateString = (string, shift) => {
    var newString = "";
    var startingPoint = string.length-shift%string.length;
    var i = startingPoint;
    while( newString.length < string.length ){
        newString+=string[(i%string.length)]
        i++;
    }
    return newString;
}

const test1 = 'abcdefghi'
console.log(rotateString(test1,20))


const isRotation = (string1, string2) => {
    if(string1.length !== string2.length){
        return false;
    }
    if(string1 === string2){
        return true;
    }
    //check all possible rotations from rotateString and compare to arr2
    let maxPossibleShifts = string1.length;
    for(let i = 1; i < maxPossibleShifts; i++){
        let testShift = rotateString(string2,i);
        if(string1 === testShift){
            return true;
        }
    }
    return false;
}

const test2 = 'bcdefghig'
console.log(isRotation(test1,test2))