// Runtime 52 ms, Memory Usage 33.8 MB

const subtractProductAndSum = (n) => {
    // convert the argument integer to a string
    // split the string by character
    // use .map() to iterate through the split array and return each element as a number
    // save that array to a variable
    let numArr = String(n).split("").map(char => {
        return Number(char)
    })
    
    // use .reduce() to get the product and sum
    // the callback for the product should be (total, currentVal) => total*currentVal which will iterate through the array and multiply all values together
    // the callback for the sum should be (total, currentVal) => total+currentVal which will iterate through the array and add all values together
    // then subtract the sum from the product and return that value
    return numArr.reduce((total, currentVal) => total*currentVal) - numArr.reduce((total, currentVal) => total+currentVal)
};