const findMaxConsecutiveOnes = (nums) => {
    let oneCount = 0
    let highestCount = 0
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            oneCount += 1
        } else {
            highestCount = oneCount > highestCount ? oneCount : highestCount
            oneCount = 0
        }
    }
    
    return oneCount > highestCount ? oneCount : highestCount
};