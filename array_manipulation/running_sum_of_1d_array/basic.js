// Runtime 84 ms, Memory Usage 37.5 MB
const runningSum = (nums) => {

    // declare three variables
    // 1. an array of the sums
    // 2. an arrary of the original numbers to add together
    // 3. a reducer function to get the sums
    let sums = []
    let itNums = []
    let reducer = (total, currentVal) => total+currentVal
    

    // iterate through the input array
    // push the original numbers into the appropriate array
    // add the sum of each of those numbers to the sums array
    for (let i = 0; i < nums.length; i++) {
        itNums.push(nums[i])
        sums.push(itNums.reduce(reducer))
    }


    // return the sums array
    return sums
};