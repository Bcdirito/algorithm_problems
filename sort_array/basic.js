var sortArray = function(nums) {
    let sortNums = [nums[0]]
    
    const findCorrectIdx = (arr, num) => {
        for (let i = 0; i < arr.length; i++){
            if (arr[i] > num) return i
            else if (i === arr.length - 1) return i+1
        }    
    }
    
    for (let i = 1; i < nums.length; i++){
        sortNums.splice(findCorrectIdx(sortNums, nums[i]), 0, nums[i])
    }
    
    return sortNums
};