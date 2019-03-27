// Runtime 64 ms, Memory Usage 34.5 MB

function searchInsert(nums, target) {

    // iterate through the nums array
    for (let i = 0; i < nums.length; i++){

        // if the current index is greater than or equal to the target
        // return the index
        if (nums[i] >= target){
            return i
        }
    }
    
    // if no number is greater than or equal the target, it needs to be pushed onto the end
    // return the length of the numbers array
    // the length current length would be the index of the pushed in target
    return nums.length
}