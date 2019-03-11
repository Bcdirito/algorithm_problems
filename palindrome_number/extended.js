// Runtime 292 ms, Memory Usage 45.4 mb

function isPalindrome(x) { 
    const arr = String(x).split("")
    for (let i = 0; i < Math.floor(arr.length/2); i++){
        let l = i + 1
        if (arr[i] !== arr[arr.length-l]){
            return false
        }
    }
    return true
};