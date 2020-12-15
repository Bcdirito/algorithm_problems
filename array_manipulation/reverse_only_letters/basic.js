// Runtime 64ms,  Memory Usage 40.2 MB
const reverseOnlyLetters = (S) => {
    // declare 3 variables
    // the first will be a string of all letters upper and lower case
    // the second will be a string that we will ultimately return
    // the third will be an empty object
    const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let revStr = ""
    let reference = {}
    
    // iterate through the alphabet string and create a key value pair for each letter
    // the value is arbitrary, so long as it doesn't equal undefined
    for (let i = 0; i < alphabet.length; i++) {
        reference[alphabet[i]] = true
    }
     
    // filter through a split array of the input string and only grab letters by using the reference object
    let onlyAlpha = S.split("").filter(char => {
         return reference[char] === true
     })
     

    //  iterate through the original string and check if each character is a letter
    // if so, add the last letter in the onlyAlpha array
    // else add the current symbol
     for (let i = 0; i < S.length; i++) {
         if (reference[S[i]] === true) revStr += onlyAlpha.pop()
         else revStr += S[i]
     }
     
    //  return the reversed string
     return revStr
 };