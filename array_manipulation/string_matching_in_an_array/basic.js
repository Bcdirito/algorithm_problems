// Runtime 80 ms, Memory Usage 40 MB
const stringMatching = (words) => {    
    // declare a helper function
    // this function will iterate through the words and see if there are other words that include the substring
    // if none are found, default to false
    const checkMatch = (arr, word) => {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].includes(word)) return true
        }
        
        return false
    }
    
    // iterate through the input words using .filter
    // make a copy of the input aray
    // remove the current word
    // run the helper function and keep the word if it is in another word
    return words.filter(word => {
        const copy = words.slice()
        copy.splice(words.indexOf(word), 1)
        return checkMatch(copy, word)
    })
};