// Runtime 56 ms, Memory Usage 34 MB

function toGoatLatin(S) {
    // split the string into an array by wordd
    let splitStr = S.split(" ")

    // declare an empty array
    // this will contain our goat words
    let goatArr = []

    // declare an empty string
    // this is where we will store our individual goat words
    let goatWord = ""
    
    // iterate through the split string array
    for (let i = 0; i < splitStr.length; i++){
        // if the first letter is a vowel
        // add "ma" to the end of the word
        if ("aeiou".includes(splitStr[i][0].toLowerCase())) goatWord = splitStr[i] + "ma"

        // if the first letter isn't a vowel, make the goat word by
        // create a substring starting at the second character
        // add the first letter to the end of that substring
        // add "ma" to the end of the word
        else goatWord = splitStr[i].substring(1) + splitStr[i][0] + "ma"

        // run this loop n times
        for (let n = 0; n <= i; n++){
            // add "a" to the end of the goat word
            goatWord += "a"

            // when you've done it n times, push the word into the goat array
            if (n === i) goatArr.push(goatWord)
        }
    }
    
    // return a string of the goat array separated by a space
    return goatArr.join(" ")
};