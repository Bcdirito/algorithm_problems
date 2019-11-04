// Runtime 72 ms, Memory Usage 33.8 mb

function validSquare(num) {
    // Built in JS function. First, Math.sqrt(num) will find the square root of the number.
    // Then, Number.isInteger() will determine if the number is whole, and therefore an integer.
    // Number.isInteger returns a boolean.
    return Number.isInteger(Math.sqrt(num))
};