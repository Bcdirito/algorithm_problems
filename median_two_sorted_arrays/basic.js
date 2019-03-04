function findMedianSortedArrays(nums1, nums2) {
    let newArr = nums1.concat(nums2).sort(function(a, b){return a - b})
    
    if (newArr.length % 2 === 0 ){
        let twoInd = newArr.length / 2
        return (newArr[twoInd - 1] + newArr[twoInd]) / 2
    } else {
        return newArr[Math.floor(newArr.length / 2)]
    }
};