// Runtime 108 ms, Memory Usage 35.8 mb

function reverseInt(x) {
    // declare a variable that will serve to return a negative or positive number
    let i;

    // using a ternary operator, determine if the end number needs to be postiive or negative.
    // if input is positive, return 1
    // if input is negative, return -1
    x < 0 ? i = -1 : i = 1

    // to reverse the number as a string:
    // 1. get the absolute value, otherwise a "-" will be tacked on at the end
    // 2. convert the number into a string
    // 3. split the string into an array
    // 4. reverse the array
    // 5. join the array into a single string.
    let revStr = String(Math.abs(x)).split("").reverse().join("")

    // to get positive or negative value:
    // 1. convert number into string
    // 2. multiply it by i, to get positive or negative value
    let revNum = Number(revStr) * i

    if(revNum < Math.pow(-2, 31) || revNum > Math.pow(2, 31) - 1){
      // if revNum doesn't fall in 32-bit range return 0
      return 0  
    } else {
      // if revNum falls in 32-bit range
      return revNum   
    }
}