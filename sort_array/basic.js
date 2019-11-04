// Runtime 688ms, Memory Usage 41.8 MB

const sortArray = (nums) => {
    // declare an array variable
    // initialize with the first element of the array argument
    // this will be used as a reference for the first index we iterate with
    let sortNums = [nums[0]]
    
    // declare a helper function
    const findCorrectIdx = (arr, num) => {
        // iterate through the sorted array variable
        for (let i = 0; i < arr.length; i++){

            // if you have found a number greater than our argument, this is the index to use for .splice()
            // return said index
            if (arr[i] > num) return i

            // else if the current index is the final index, return the index incremented by 1,
            // this will let .splice() know to push it on at the end
            else if (i === arr.length - 1) return i+1
        }    
    }
    
    // iterate through the argument array
    for (let i = 1; i < nums.length; i++){
        // call the helper function on the current element in the array
        // when the function has found an index, splice the current element according to the index
        sortNums.splice(findCorrectIdx(sortNums, nums[i]), 0, nums[i])
    }
    
    // return the sorted array
    return sortNums
};