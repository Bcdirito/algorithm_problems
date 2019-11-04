// Runtime 104 ms, Memory Usage 38.2 MB

function singleNumber(nums) {
    // declare an empty history object
    let history = {}
    
    // iterate through the nums array
    for (let i = 0; i < nums.length; i++){
        if (history[nums[i]] !== undefined){
            // if there is a key of the current element in the object
            // increment the value by 1
            history[nums[i]] += 1
        } else {
            // if no key is found, create a key/value pair
            history[nums[i]] = 1
        }
    }
    
    // iterate through the object
    for (const key in history){
        if (history[key] === 1){
            // return the key with a value of 1
            return key
        }
    }
};