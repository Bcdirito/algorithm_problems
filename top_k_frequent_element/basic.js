const topKFrequent = (nums, k) => {
    let history = {}
    
    for (let i = 0; i < nums.length; i++){
        if (history[nums[i]] !== undefined) history[nums[i]] += 1
        else history[nums[i]] = 1
    }
    
    let sortHistArr = Object.keys(history).sort((a, b) => {return history[a] - history[b]})
    
    return sortHistArr.slice(sortHistArr.length - k).map(idx => {
        return Number(idx)
    })
};