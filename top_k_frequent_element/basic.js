// Runtime 64 ms, Memory Usage 37.4 MB

const topKFrequent = (nums, k) => { 
    // declare an empty history object variable
    // this will be used to gather how many occurrences of each element there are
    let history = {}
    
    // iterate through the input array
    for (let i = 0; i < nums.length; i++){
        
        // if there is a key of the current element, increment the value by one
        if (history[nums[i]] !== undefined) history[nums[i]] += 1

        // else create a key with the value equal to one
        else history[nums[i]] = 1
    }
    
    // create an array of the object keys sorted by their values in ascending order
    let sortHistArr = Object.keys(history).sort((a, b) => { return history[a] - history[b] })
    
    // create a slice of the array of the last k elements
    // map through said slice and return a Number of each element
    // return that map
    return sortHistArr.slice(sortHistArr.length - k).map(idx => {
        return Number(idx)
    })
};