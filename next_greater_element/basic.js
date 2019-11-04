// Runtime 72ms, Memory Usage 41.4 MB

function nextGreaterElement(nums1, nums2) {

    // declare an empty array variable
    // this will hold our next greater numbers or -1's
    let newArr1 = []
    
    // iterate through the nums1 array
    for (let i = 0; i < nums1.length; i++){
        // get the index of the current element in the nums 2 array
        let idx = nums2.indexOf(nums1[i])

        // make a slice of the nums2 array
        let nums2SubArr = nums2.slice(idx)

        // iterate through the nums 2 array
        for (let n = 0; n < nums2SubArr.length; n++){
            // if the current index in nums2 is greater than the element in nums 1
            if (nums2SubArr[n] > nums1[i]){
                // push it into the array and break out of this for loop
                newArr1.push(nums2SubArr[n])
                break
            } else if (nums2SubArr[n] <= nums1[i] && n === nums2SubArr.length - 1){
                // if no element is greater, push -1 into the array
                newArr1.push(-1)
            }
        }
    }
    
    // return the newArr1 array
    return newArr1
};