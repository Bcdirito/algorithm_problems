function disemvowel(str) {
    // declare a variable with a value of an empty string 
    // this will contain our edited string
    let editStr = ""

    // declare an array containing all of the vowels
    let vowels = ["a", "e", "i", "o", "u"]
    
    // iterate through the string
    for (let i = 0; i < str.length; i++){
        // get the lowercased character and declare it to a variable
        let lowerCase = str[i].toLowerCase()
        if (vowels.includes(lowerCase)){
            // if the vowels array contains the the lowerCase variable continue to the next index
            continue
        } else {
            // if not, add it to the editStr variable
            editStr += str[i]
        }
    }
    
    // return the edited string
    return editStr
  }