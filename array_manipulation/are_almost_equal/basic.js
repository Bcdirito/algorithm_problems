// Runtime 88 ms, Memory Usage 41.8 MB
const areAlmostEqual = (s1, s2) => {
    // check if both strings contain the same characters
    // if so, iterate through the strings
    // if not, return false, they are not almost equal
    if (s1.split("").sort((a, b) => {return a.localeCompare(b)}).join("") === s2.split("").sort((a,b) => {return a.localeCompare(b)}).join("")) {
        // declare a variable with a value of 0
        // will be the count of characters that don't match
        let swapCount = 0
        
        // iterate through the strings
        // if characters don't match, add a count
        for (let i = 0; i < s1.length; i++) {
            if (s1[i] !== s2[i]) swapCount += 1
        }

        // if swapCount is less than or equal than two, then one character can swap to make strings equal
        // return if count is lower than limit
        return swapCount <= 2
    } else {
        return false
    }
};