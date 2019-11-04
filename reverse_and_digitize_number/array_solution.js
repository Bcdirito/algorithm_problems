function digitize(n) {
    // convert the number to a string
    // split the string into an array
    // reverse the array
    let revArr = String(n).split("").reverse()

    // declare an empty array variable
    let intArr = []
    
    // iterate through the reversed array
    for (let i = 0; i < revArr.length; i++){
      // convert the character to a number
      // push that number into the integer array
      intArr.push(Number(revArr[i]))
    }
    
    // return the integer array
    return intArr
}