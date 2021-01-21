// Runtime 56 ms, Memory Usage 35.4 MB
const singleNonDuplicate = (nums) => {
    // declare array variable with one element
    // that element should be the first element in the param array
    let singleArr = [nums[0]]
    
    // iterate through the param array, starting at index one
    // check if the last element of the singleArr matches the current element
    // if so, remove it from the array
    // else push the current element to the array
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === singleArr[singleArr.length-1]) singleArr.pop()
        else singleArr.push(nums[i])
    }
    
    // return the first element of the array, and the array should only have one element
    return singleArr[0]
};