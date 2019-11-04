function rotLeft(a, d) {
    // get array slice that will be rotated to the end
    // since "d" is the amount of rotations, slice from the first index that amount.
    let arr1 = a.slice(0, d)

    // get array slice that will be rotated to the beginning
    // since "d" is the amount of rotations, start at the matching index and go to the end.
    let arr2 = a.slice(d, a.length)
    
    // concat the first array to the end of the second array to match the original length
    return arr2.concat(arr1)
}
