const lengthOfLongestSubstring = (s) => {
    // declare Substring Variable
    // this will be where we store our longest substring
    let subStr;
    
    // declare a helper function
    // this function checks the length of the current substring against the stored substring
    // if it is longer, it replaces the stored substring

    const checkWordLength = (word) => {
        if (word.length > subStr.length) subStr = word
    }
    
    // declare another helper function
    // this function iterates through the substring until it hits a recurring character
    const getSubstring = (str) => {
        // declare a checker object
        // this object will store the iterated characters as keys
        // we are using an object to speed up the process of finding already iterated characters
        let checker = {}
        
        // iterate through the substring
        for (let i = 0; i < str.length; i++){
            if (checker[str[i]] !== undefined) {

                // if you have hit an already iterated character slice the substring up to the current index
                // next run the word length helper function
                checkWordLength(str.slice(0, i))

                // break out of the loop
                break
            } else if (i === str.length - 1) {
                // if you have reached the final index without any recurring characters, check the word length
                checkWordLength(str)
            } else {
                // if you have arrived to the else statement, add a key value pair
                // the key is the character
                // the value is the index
                checker[str[i]] = i
            }
        }
    }
    
    // iterate through the argument string
    for (let i = 0; i < s.length; i++){
        // slice the string from the current index to the end
        // run the helper function
        getSubstring(s.slice(i))    
    }
    
    // return the length of the longest substring
    return subStr.length
    
};