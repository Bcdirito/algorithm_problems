// Runtime 96 ms, Memory Usage 46.8 MB
const frequencySort = (s) => {
    // declare two variables
    //  an emtpy object we will use for history
    // an empty string that we will sort the characters by frequency
    let history = {}
    let sortStr = ""
    
    // iterate through the input string to get the number of occurrences in the array
    for (let i = 0; i < s.length; i++) {
        if (history[s[i]] !== undefined) history[s[i]] += 1
        else history[s[i]] = 1
    }
    
    // write a helper method to add the character the number of times it appears in the sorted string
    const addToStr = (el, count) => {
        for (let i = 0; i < count; i++) {
            sortStr += el
        } 
    }
    
    // sort the keys of the history object by their occurrences in descending order
    // iterate through the array
    // call the helper method with each character and the number of times it occurs
    for (const char of Object.keys(history).sort((a, b) => {return history[b] - history[a]})) {
        addToStr(char, history[char])
    }
    
    // return the sorted string
    return sortStr
};