// Runtime 44 ms, Memory Usage 34.1 MB

const reverseOnlyLetters = (S) => {

    // declare a string of all of the characters of the alphabet and an empty object variable
    // we will use these to speed up the checking process for when we ultimately reverse the string
    let alphaStr = "abcdefghijklmnopqrstuvwxyz"
    let alphaObj = {}

    // declare an empty reverse string variable
    // this will ultimately be what we return
    let revStr = ""
    
    // iterate through the alphabet string to create an object
    // the keys are the letter
    // the value is the index
    for (let i = 0; i < alphaStr.length; i++){
        alphaObj[alphaStr[i]] = i
    }
    
    // create an array of all of the letters in their original casing
    // we will use this when ultimately reversing the string
    let filtStrArr = S.split("").filter(char => {
        return alphaObj[char.toLowerCase()] !== undefined
    })
    
    // iterate through the input string
    for (let i = 0; i < S.length; i++){

        // check if the character is a letter
        // if so, add the last index in the filtered string array to the reversed string
        if (alphaObj[S[i].toLowerCase()] !== undefined) revStr += filtStrArr.pop()
        
        // if not, add the character to the string
        else revStr += S[i]
    }
    
    // return the reversed string
    return revStr
};