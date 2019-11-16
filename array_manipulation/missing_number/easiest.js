// Run Time 116 ms, Memory Usage 37.2 mb

function missingNumber(arr){
    // sort array in order
    arr.sort(function(a, b){ return a - b })
    
    // iterate through array
    for (let i = 0; i < arr.length; i++){
        // since array should start at 0, the index should match the number
        if (arr[i] !== i){
            return i
        } else if (i === arr.length - 1){
            // if every number corresponds, we need to return the next value in the sequence
            return arr.length
        }
    }
}
