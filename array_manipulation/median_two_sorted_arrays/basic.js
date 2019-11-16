// Runtime 140ms, 39.2MB

function findMedianSortedArrays(nums1, nums2) {
    // create a new array by concatenating both arrays
    // sort the new array 
    let newArr = nums1.concat(nums2).sort(function(a, b){return a - b})
    
    if (newArr.length % 2 === 0 ){
        // if the array has an even length, divide it by two to get one of the middle indices
        let twoInd = newArr.length / 2

        // add the "middle" index and previous index together
        // divide by two to find the median of an even array
        return (newArr[twoInd - 1] + newArr[twoInd]) / 2
    } else {
        // if the array has an odd length, return the middle index
        return newArr[Math.floor(newArr.length / 2)]
    }
};