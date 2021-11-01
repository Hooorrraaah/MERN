

function partition(input){

var start = arr[0]
var pivot = start
var j = input.length-1
for (var i=0;i<input.length;i++){
    if(!(input[i]<pivot)){
        for (j;j>i;j--){
            if (!(input[j]>pivot)){
                var temp = input[i]
                input[i]= input[j]
                input[j]= temp
            break
            }

        }
    }

if(j==i){
    console.log(input)
    return i
}
if(input[i]==pivot){
    if (input[i]!= input[j]){
        i--
    }
}
}    
}

var arr = [5,6,3,2,8]
partition(arr)
console.log(partition(arr))