

function radixSort(arr) {
    for (var i=arr.length-1;i>=0;i--) {
        for (var j=arr[i].length-1;j>=0;j--) {
            
            console.log("hello")
            console.log(arr[j])
            return "hello"
        } 
        
    }
    return arr
}

var arr = [121, 432, 564, 623, 921, 245, 788]
console.log(radixSort(arr))