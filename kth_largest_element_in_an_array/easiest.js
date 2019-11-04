// Runtime 60 ms, Memory Usage 36.1 MB

const findKthLargest = function(nums, k) {
    // use JS built-in function to sort the nums array
    // find the kth largest by subtracting k from the length of the array using the difference as the index
    // return that element
    return nums.sort((a, b) => {return a - b})[nums.length-k]
};