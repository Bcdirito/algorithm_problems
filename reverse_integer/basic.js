// Runtime 92 ms, Memory Usage 35.7 mb

function reverseInt(x){
    // get minimum of 32-bit integer range
    const min = Math.pow(-2, 31)
    
    // get maximum of 32-bit integer range 
    const max = Math.pow(2, 31) - 1

    // get absolute value string of number.
    // you need the positive value, or reversing will leave a "-" at the end.
    const absValStr = String(Math.abs(x))

    // delcare empty string to plug numbers into later
    let finalVal = ""
    
    // declare counter for while loop.
    // start at 1 since you'll need to start at the end of the string
    let i = 1

    // loop backwards through the string to plug in the numbers in reverse order.
    // loop will break once i is greater than the length of the string.
    while (i <= absValStr.length){
        finalVal += absValStr[absValStr.length - i]
        i++
    }
    
    // turn string into a number
    let finalNum = Number(finalVal)

    if (x > 0 && finalNum < max){
        // if positive number and number is in 32-bit range
        return finalNum
    } else if (x < 0 && -finalNum > min) {
        // if negative number and number is in 32-bit range
        return -finalNum
    } else {
        // if out of 32-bit range
        return 0
    }
}
    