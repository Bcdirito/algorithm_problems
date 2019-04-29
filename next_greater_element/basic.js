function nextGreaterElement(nums1, nums2) {
    let newArr1 = []
    
    for (let i = 0; i < nums1.length; i++){
        let checker = nums1[i]
        let idx = nums2.indexOf(checker)
        let nums2SubArr = nums2.slice(idx)
        for (let n = 0; n < nums2SubArr.length; n++){
            if (nums2SubArr[n] > checker){
                newArr1.push(nums2SubArr[n])
                break
            } else if (nums2SubArr[n] <= checker && n === nums2SubArr.length - 1){
                newArr1.push(-1)
            }
        }
    }
    
    return newArr1
};