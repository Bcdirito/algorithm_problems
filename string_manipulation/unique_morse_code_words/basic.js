// Runtime 52 ms, Memory Usage 35.4 MB

const uniqueMorseRepresentations = (words) => {

    // declare an empty morseObj variable
    // this will be our object that connects the morse and alphabetic characters
    let morseObj = {}

    // declare an empty morseCountobj variable
    // this will be our object that holds all of the unique morse code words
    let morseCountObj = {}
    
    // declare a string of the alphabet in order
    let alpha = "abcdefghijklmnopqrstuvwxyz"

    // declare an array of the morse alphabet in order
    let morseArr = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
    
    // iterate through the alphabet string
    for (let i = 0; i < alpha.length; i++){

        // add a key to the morseObj variable for each letter with a value of the morse translation
        morseObj[alpha[i]] = morseArr[i]
    }
    
    // declare a helper function that takes in a word
    // this function translates the word into morse code
    const createMorseWord = (word) => {

        // declare an empty string
        // this will hold our morse word
        let morseStr = ""
        
        // iterate through the word
        for (let i = 0; i < word.length; i++){

            // for each letter add the morse translation to the string
            morseStr += morseObj[word[i]]
        }
        
        // return the string
        return morseStr
    }
    
    // iterate through the input array
    for (let i = 0; i < words.length; i++){

        // create the morse word
        let morse = createMorseWord(words[i])
        
        // check if there is an instance of the morse word
        // if so, increment the value by one
        if (morseCountObj[morse] !== undefined) morseCountObj[morse] += 1
       
        // if not, create a key value pair with a value of one
        else morseCountObj[morse] = 1
    }
    
    // run Object.keys() on the morseCountObj to get an array of the keys
    // return the length of that array, as that is the number of unique morse code words
    return Object.keys(morseCountObj).length
};