let chars = "ZACBA";
let unique = []
let dupeArr = []

function deDupe (chars){
    for (var i = 0;i<chars.length;i++){
        var dupe = false
        for (var j= 1;j<chars.length;j++){
            if (chars[i]== chars[j]&& i!=j){
                dupeArr.pop(chars[i])
                dupe = true
            }
        }
        if (!dupe){
            dupeArr.push(chars[i])
        }

    }
    return dupeArr
}

// function uniqueChars (chars){
//     for (var i = 0;i<chars.length;i++){
//         var dupe = false
//         for (var j= 0;j<chars.length;j++){
//             if (chars[i]== chars[j]&& i!=j){
//                 dupe = true
//             }
//         }
//         if (!dupe){
//             unique.push(chars[i])
//         }
//     }
//     return unique
// }

// console.log(uniqueChars(chars))
console.log(deDupe(chars))