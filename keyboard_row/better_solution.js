// Runtime 52 ms, Memory Usage 33.7 MB
const findWords = (words) => {
    // initialize an empty array variable
    // this will be used to store our single row words
    let singleRowWords = []
    
    // declare a helper function that takes in a string
    // this function will generate our row objects
    const objCreater = (str) => {
        // declare an empty object
        // this will be the object we return to create the row object
        let obj = {}
        
        // iterate through the string
        for (let i = 0; i < str.length; i++){
            
            // for each character create a key/value pair
            // the key is the character
            // the value, although arbitray, is the index
            obj[str[i]] = i
        }
        
        // return the created obj
        return obj
    }
    
    // run the helper function three times to create row objects
    let topRow = objCreater("qwertyuiop")
    let midRow = objCreater("asdfghjkl")
    let bottomRow = objCreater("zxcvbnm")
    
    // declare a second helper function that takes in a row object, the lower-cased word, and the word with it's original casing
    const rowCheck = (row, word, originalCase) => {

        // iterate through the lower-cased word
        for (let i = 0; i < word.length; i++){

            // if no key is found, it is not a single row word
            // return an empty string to break out of the function
            if (row[word[i]] === undefined) return ""
        }
        
        // if you made it through the loop, it is a single row word
        // push the original casing word into the singleRowWords array
        singleRowWords.push(originalCase)
    }
    
    // iterate through the input array of words
    for (let i = 0; i < words.length; i++){

        // create a lower-cased copy of the word
        // this uses less memory and speeds up the process of having to lower case each character
        let lowerWord = words[i].toLowerCase()

        // check the row the first character is in and run the helper function on that particular word
        if (topRow[lowerWord[0]] !== undefined) rowCheck(topRow, lowerWord, words[i])
        else if (midRow[lowerWord[0]] !== undefined) rowCheck(midRow, lowerWord, words[i])
        else rowCheck(bottomRow, lowerWord, words[i])
    }
    
    // return the final array of single row words
    return singleRowWords
};