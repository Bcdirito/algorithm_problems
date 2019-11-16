function digitize(n) {
    // convert the number to a string
    let numStr = String(n)

    // declare an empty array
    // our digitized numbers will be added here
    let intArr = []
    
    // iterate through the string
    for (let i = 0; i < numStr.length; i++){
        // convert each character to a number
        // add that number to the beginning of the array
        intArr.unshift(Number(numStr[i]))
    }


    // return the number array
    return intArr
}