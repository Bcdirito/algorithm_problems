// Runtime 68 ms, Memory Usage 38 MB
const toGoatLatin = (S) => {
    // define three variables
    // an empty object to use as a reference for vowels
    // the string split into an array by word
    // an empty string that will hold the appropriate amount of "a"'s to tack on to the suffix 
    let reference = {}
    const splitStr = S.split(" ")
    let aCount = ""

    // iterate through a string of vowels to create the reference object
    // the value of the reference object doesn't matter so long as it is not set to undefined
    for (const char of "aeiouAEIOU") {
        reference[char] = ""
    }

    // iterate through the split string to create a map
    // for each word, increment the aCount string by one "a"
    // using string interpolation, create the suffix by combining "ma" w/the aCount
    // check if the first character is a vowel, and create the appropriate goat word
    return splitStr.map(word => {
        aCount += "a"
        let suffix = `ma${aCount}` 
        if (reference[word[0]] !== undefined) return `${word}${suffix}`
        else return word.split("").slice(1).join("") + word[0] + suffix
    }).join(" ")  
}