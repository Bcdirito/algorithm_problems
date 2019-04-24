function uniqueInOrder(iterable){
    // declare an empty array that will hold our unique order characters
    let charArr = []
    
    // iterate through the iterable
    for (let i = 0; i < iterable.length; i++){
        // if the current character does not equal the next character, push it into the array
        if (iterable[i] !== iterable[i + 1]) charArr.push(iterable[i])
    }
    
    // return the array
    return charArr
}