const runningSum = (nums) => {
    let sums = []
    let itNums = []
    let reducer = (total, currentVal) => total+currentVal
    
    for (let i = 0; i < nums.length; i++) {
        itNums.push(nums[i])
        sums.push(itNums.reduce(reducer))
    }
    
    return sums
};