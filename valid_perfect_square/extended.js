// Runtime 72 ms, Memory Usage 34.5 mb

function validSquare(num) {
    // n will be our counter. Starting at one will take care of edge cases.
    let n = 1
    // loop through while n squared is less than or equal to the input.
    while (n * n <= num){
        if (n * n === num){
            // if n squared equals the input, then the input is a valid square.
            return true
        } else if (n * n < num){
            // since we haven't found an answer yet, increase n.
            n++
        }
    }
    // if we make it through the loop, then we don't have a perfect square.
    return false
};
