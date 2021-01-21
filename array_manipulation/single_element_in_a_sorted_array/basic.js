const singleNonDuplicate = (nums) => {
    let singleArr = [nums[0]]
    
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === singleArr[singleArr.length-1]) singleArr.pop()
        else singleArr.push(nums[i])
    }
    
    return singleArr[0]
};