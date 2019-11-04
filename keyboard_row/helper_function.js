// Runtime 72 ms, Memory Usage 34MB

var findWords = function(words) {
    // declare an array of all of the top row characters
    let topRow = "qwertyuiop".split("")

    // declare an array of all of the mid row characters
    let midRow = "asdfghjkl".split("")

    // declare an array of all of the bottom row characters
    let bottomRow = "zxcvbnm".split("")

    // declare an empty array variable
    // this array will hold our words that contain a single row of characters
    let singleRowWords = []
    
    // write a helper function
    // the three arguments will be the lower cased word, the original cased word, and the row the first character was found in
    const rowChecker = (word, origWord, row) => {
        // iterate through the lower cased word
        for (let c = 0; c < word.length; c++){
            // check if the character is included in the same row
            if (row.includes(word[c])){
                // if yes and it is the final character,
                // push the the original cased word into the single row words array
                if (c === word.length - 1) singleRowWords.push(origWord)
                // otherwise continue to the next character
                else continue
            } else {
                // if the character isn't in the row, break out of the for loop
                break
            }
        }
    }
    
    // iterate through the words array
    for (let i = 0; i < words.length; i++){
        // convert the to lower case
        let lowerWord = words[i].toLowerCase()
        
        // check which row the first character is found in
        // then run the row checker function for that row
        if (topRow.includes(lowerWord[0])) {rowChecker(lowerWord, words[i], topRow)}
        else if (midRow.includes(lowerWord[0])) {rowChecker(lowerWord, words[i], midRow)}
        else {rowChecker(lowerWord, words[i], bottomRow)}
    }
    
    // return the single row words array
    return singleRowWords
};