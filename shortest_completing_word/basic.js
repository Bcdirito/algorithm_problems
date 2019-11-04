// Runtime 76 ms, Memory Usage 39.8 MB 

const shortestCompletingWord = (licensePlate, words) => {
    // intiialize an undefined variable
    // this variable will hold our current shortest word
    let shortestWord;

    // initialize an empty object
    // this will be the master object of all letters in the licensePlate
    let lPObj = {}
        
    // iterate through the license plate
    for (let i = 0; i < licensePlate.length; i++) {
        
        // check if the license plate is a letter
        if (isNaN(licensePlate[i]) === true && licensePlate[i] !== " ") {
            
            // get the lower case of the character
            let lowerChar = licensePlate[i].toLowerCase()

            // check if there is a key value pair 
            // if it exists, increment the value by one
            // if not, create the pair with a value of one
            if (lPObj[lowerChar] !== undefined) lPObj[lowerChar] += 1
            else lPObj[lowerChar] = 1
        }
    }
    
    // declare a helper function
    const checkComplete = (word) => {

        // create a copy of the master object
        // we need a copy as we are interacting with the values
        let copyLPObj = Object.assign({}, lPObj)
        let lowerWord = word.toLowerCase()

        // iterate through the word
        // if a key value pair of the character exists and the value is greater than zero, decrement the value by one
        for (let i = 0 ; i < lowerWord.length; i++) {
            if (copyLPObj[lowerWord[i]] !== undefined && copyLPObj[lowerWord[i]] > 0) copyLPObj[lowerWord[i]] -= 1 
        }
        
        // iterate through the object
        for (const key in copyLPObj) {

            // check if the value is now equal to zero
            // if not, return false
            if (copyLPObj[key] !== 0) return false   
        }
        
        // if you make it to this point, you have a complete word
        // return true
        return true
    }
    
    // iterate through the words array
    for (let i = 0; i < words.length; i++){

        // check if the word is complete
        if (checkComplete(words[i]) === true) {
            
            // if so, check if the the shortest word is currently undefined or if the current shortest word is longer than the current word
            // if either of those are true, make the current word the shortest word
            if (shortestWord === undefined || words[i].length < shortestWord.length) shortestWord = words[i]
        }
    }
    
    
    return shortestWord
};