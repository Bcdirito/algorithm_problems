const thirdMax = (nums) => {
    let max;
    let secondMax;
    let thirdMax;
    
    const uniques = Array.from(new Set(nums))
    
    for (const num of uniques) {
        if (max === undefined || num > max) {
            thirdMax = secondMax
            secondMax = max
            max = num
        } else if (secondMax === undefined || num > secondMax ) {
            thirdMax = secondMax
            secondMax = num
        } else if (thirdMax === undefined || num > thirdMax) {
            thirdMax = num
        }
    }
    
    return uniques.length > 2 ? thirdMax : max
};