function high(x){
    // split the string by word into an array
    let splitStr = x.split(" ")

    // declare an empty word object
    let wordObj = {}

    // declare a checker variable equal to one less than the ascii of a
    // this is equal to 96
    const checker = "a".charCodeAt() - 1

    // declare an empty string variable that will house the highest word
    let highestWord = ""

    // declare an highest word value variable and set it equal to 0
    // this will be used to compare the values of each word
    let highestWordVal = 0
    
    // iterate through the split string array
    for (let i = 0; i < splitStr.length; i++){
        // declare a variable that will hold the word
        // this was done for easier writing
        let word = splitStr[i]

        // add a key/value pair of each word
        // declare it's value to 0
        wordObj[word] = 0

        // iterate through each character in the word
        for (let l = 0; l < word.length; l++) {
            // add the difference of the character and the checker to the word key
            wordObj[splitStr[i]] += word[l].charCodeAt() - checker
        }
    }
    
    // iterate through the key value pairs of the object
    for (const key in wordObj){
        // check if the current key's value is higher than the highest word value variable
        if (wordObj[key] > highestWordVal){
            // if so, set the highestWord to the current key
            // and set the highestWordVal variable to the current value
            highestWord = key
            highestWordVal = wordObj[key]
        }
    }
    
    // return the highestWord variable
    return highestWord
}