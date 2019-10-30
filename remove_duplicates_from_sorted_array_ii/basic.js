// Runtime 60 ms,  Memory Usage 35.7 MB

const removeDuplicates = (nums) => {

    // iterate through the input array
    for (let i = 0; i < nums.length - 2; i++){

        // check if this element, the next element, and the following are the same number
        if (nums[i] === nums[i+1] && nums[i+1] === nums[i+2]){

            // if so, remove the current element from the array
            nums.splice(i,1)

            // decrement i by 1
            // this will cause the iteration to run on the current element
            i--
        }
    }

    // return the length of the new nums array
    return nums.length
};