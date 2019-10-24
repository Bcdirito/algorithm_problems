const matrixReshape = (nums, r, c) => {
    let flatArr = []
    let reshape = []
    
    for (let i = 0; i < nums.length; i++){
        flatArr.push(...nums[i])
    }
    
    for (let i = 0; i < flatArr.length; i++){
        if (flatArr.slice(i, i+c).length === c) {
            reshape.push(flatArr.slice(i, i+c))
            i+= c - 1
        } else return nums
    }
    
    if (reshape.length === r) return reshape
    else return nums
};