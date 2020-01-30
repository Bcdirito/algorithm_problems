// Runtime 116 ms, Memory Usage 42.1 MB

const longestWord = (words) =>{
    // sort the input array by length in desending order
    // this will help to shorten the runtime of the algorithm, as we can break once we get to a value less than the longest word
    words.sort((a, b) => {return b.length - a.length})
        
    // initialze two variables
    // one will be an empty object we use to check if we can build every word
    // the second will be an empty string that will hold our longest word
    let wordObj = {}
    let longestWord = ""
    
    // iterate through the input array to create an object where the words are keys and the valus are empty strings
    for (let i = 0; i < words.length; i++) {
        wordObj[words[i]] = ""
    }
    
    // declare a helper function that takes in a word and an object
    const checkIfValid = (word, obj) => {
        // iterate through the word
        // for each character, check to see if there is a corresponding key for that slice of the word
        // if there is, continue as you can build this word
        // if not, return false, this word can't be built
        for (let i = 0; i < word.length; i++){
            if (obj[word.slice(0, i+1)] === undefined) return false
        }
        
        // if you've made it here, it mean the word can be built, so return true
        return true
    }
    
    // iterate through the words array
    for (let i = 0; i < words.length; i++){
        // check if the word is longer or the same length as the current longestWord
        // if it is, check to see if it is a valid word, then check to see if it is longer or the same length and lexicographically smaller than the current longest word
        // if either of those conditions are true, then the current element becomes the value of longestWord
        // if the word is shorter than the current longestWord, then we can break out of the loop as we have found the longest word
        if (words[i].length >= longestWord.length){
            if (checkIfValid(words[i], wordObj) === true && (longestWord.length < words[i].length ||  longestWord > words[i])) {
                longestWord = words[i]    
            }   
        } else {
            break
        }
    }
    
    // return the longestWord
    return longestWord
};