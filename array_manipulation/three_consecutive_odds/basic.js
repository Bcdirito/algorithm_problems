// Runtime 68ms, Memory Usage 38.4 MB
const threeConsecutiveOdds = (arr) => {
    // iterate through the array
    // stop iterating after three before the final element, 
    // there will not be any more subarrays with a length of three
    for (let i = 0; i < arr.length - 2; i++) {
        // check if the current element is divisible by two
        if (arr[i] % 2 !== 0) {
            // if so, create a subarray with a length of three
            // check if every number is divisible by two
            // if so return true
            // else, continue iterating
            if (arr.slice(i, i+3).every(num => num % 2 !== 0) === true) return true
            else continue
        }
    }
    
    return false
};