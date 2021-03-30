const kLengthApart = (nums, k) => {
    const idxs = []
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) idxs.push(i)
    }
    
    for (let i = 0; i < idxs.length; i++) {
        if ((idxs[i+1] - (idxs[i] + 1)) < k) return false
    }
    
    return true
};