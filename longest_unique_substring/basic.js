const lengthOfLongestSubstring = (s) => {
    let subStr = ""
    
    const checkWordLength = (word) => {
        if (word.length > subStr.length) subStr = word
    }
    
    const getSubstring = (str) => {
        let checker = {}
        
        for (let i = 0; i < str.length; i++){
            if (checker[str[i]] !== undefined) {
                checkWordLength(str.slice(0, i))
                break
            } else if (i === str.length - 1) {
                checkWordLength(str)
            } else {
                checker[str[i]] = i
            }
        }
    }
    
    for (let i = 0; i < s.length; i++){
        getSubstring(s.slice(i))    
    }
    
    return subStr.length
    
};