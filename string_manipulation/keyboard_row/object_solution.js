// Runtime 56 ms, Memory Usage 33.7 MB

function findWords(words) {
    // define an object where the key is the character and the value is their row
    // the top row has a value of 1
    // the mid row has a value of 2
    // the bottom row has a value of 3

    let charRows = {
            "q": 1,
            "w": 1,
            "e": 1,
            "r": 1,
            "t": 1,
            "y": 1,
            "u": 1,
            "i": 1,
            "o": 1,
            "p": 1,
            "a": 2,
            "s": 2,
            "d": 2,
            "f": 2,
            "g": 2,
            "h": 2,
            "j": 2,
            "k": 2,
            "l": 2,
            "z": 3,
            "x": 3,
            "c": 3,
            "v": 3,
            "b": 3,
            "n": 3,
            "m": 3
        }
    
    // define an empty array variable
    // this will contain our single row words
    let singleRowWords = []
    
    // iterate through the words array
    for (let i = 0; i < words.length; i++){
        // since convert the word to lowercase since our keys are all lowercase
        let lowerWord = words[i].toLowerCase()

        // get the row value of the first character
        let rowValue = charRows[lowerWord[0]]

        // iterate through the individual word
        for (let c = 0; c < lowerWord.length; c++){
            // check to see if each character is in the row
            if (charRows[lowerWord[c]] === rowValue){
                // if it is check to see if it is the final character
                // if so, push the original word into the single row words array
                if (c === lowerWord.length - 1) singleRowWords.push(words[i])
            } else {
                // if the character isn't in the row, break out of the loop
                break
            }
        }
    }
    
    // return the single row words array
    return singleRowWords
};