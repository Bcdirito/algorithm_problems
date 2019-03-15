// Runtime 824ms, Memory Usage 39.3 MB

function isAnagram(s, t) {
    // create an array of the split t string
    let tArr = t.split("")
    
    // iterate through the s string
    for (let i = 0; i < s.length; i++){
        // find the index of the element in tArr
        let ind = tArr.indexOf(s[i])
        if (ind === -1){
            // if that letter does not appear in the array, the value will equal -1
            // therefore, t is not a valid anagram
            return false
        } else {
            // if that letter appears in the array, find the first index of that letter
            // remove that letter from the array
            tArr.splice(ind, 1)
        }
    }
    
    // if we've iterated through the string, all of s is found in t
    // however a valid anagram must match in length
    // therefore the t array should equal zero if it is a valid anagram.
    // check to see if length is zero, return boolean
    return tArr.length === 0
};