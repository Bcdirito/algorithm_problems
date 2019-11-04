const findKthLargest = function(nums, k) {
    return nums.sort((a, b) => {return a - b})[nums.length-k]
};