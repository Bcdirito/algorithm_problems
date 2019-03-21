function singleNumber(nums) {
    let history = {}
    
    for (let i = 0; i < nums.length; i++){
        if (history[nums[i]] !== undefined){
            history[nums[i]] += 1
        } else {
            history[nums[i]] = 1
        }
    }
    
    for (const key in history){
        if (history[key] === 1){
            return key
        }
    }
};