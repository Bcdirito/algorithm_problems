function disemvowel(str) {
    // declare variable equal to an empty string
    // this is what we will put our edited string into
    let editStr = ""

    // declare an object containing the vowels
    vowelObj = {
      "a": 0,
      "e": 0,
      "i": 0,
      "o": 0,
      "u": 0
    }
    
    // iterate through the string
    for (let i = 0; i < str.length; i++){
        // check to see if the contains the lowercased character
        if (vowelObj[str[i].toLowerCase()] !== undefined){
            // if the obj contains the lowercased character continue to the next index
            continue
        } else {
            // if it doesn't add that character to the editStr variable
            editStr += str[i]
        }
    }

    // return the edited variable
    return editStr
}