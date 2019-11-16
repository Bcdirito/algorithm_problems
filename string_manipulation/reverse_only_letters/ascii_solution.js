// Runtime 56 ms, Memory Usage 33.7 MB

const reverseOnlyLetters = (S) => {
    
    // declare four variables
    // these four variables will be the ranges of ascii values for lower-cased and capital letters
    let lowerMin = "a".charCodeAt()
    let lowerMax = "z".charCodeAt()
    let upperMin = "A".charCodeAt()
    let upperMax = "Z".charCodeAt()


    // declare an empty string variable
    // this will hold our reversed string
    let revStr = ""

    
    // create an an array of the letters in the input string
    // we do this using and filter and checking if the character falls into the ranges of ascii values
    let filtStr = S.split("").filter(char => {
        let charNumber = char.charCodeAt()
        return (charNumber <= lowerMax && charNumber >= lowerMin)  || (charNumber <= upperMax && charNumber >= upperMin)
    })
    
    
    // iterate through the input string
    // get the ascii value of each character
    for (let i = 0; i < S.length; i++){
        let charNumber = S[i].charCodeAt()

        // if the value falls within the letter ranges, add the last index of the filtered array to the string
        if ((charNumber <= lowerMax && charNumber >= lowerMin)  || (charNumber <= upperMax && charNumber >= upperMin)) revStr += filtStr.pop()

        // if not, add the current element to the string
        else revStr += S[i]
    }
    
    // return the string
    return revStr
};