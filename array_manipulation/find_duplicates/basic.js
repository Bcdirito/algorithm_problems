const findDuplicates = (nums) => {
    let history = {}
    
    return nums.filter(num => {
        if (history[num] !== undefined) return num
        else history[num] = 1
    })
};