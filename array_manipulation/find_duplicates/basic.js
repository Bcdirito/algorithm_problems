// Runtime 120ms, Memory Usage 49.8 MB

const findDuplicates = (nums) => {
    // declare an empty object
    // this object will hold all unique values previously iterated through
    let history = {}
    
    // call .filter() on the nums array
    // check if the number exists in the history object
    // if so, collect that number
    // otherwise add it to the history
    // return the filtered array
    return nums.filter(num => {
        if (history[num] !== undefined) return num
        else history[num] = 1
    })
};