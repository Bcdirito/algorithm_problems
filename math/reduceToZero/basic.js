// Runtime 76 ms, Memory Usage 38.5 MB
const numberOfSteps = (num) => {

    // declare a recursive helper function that takes in a number and the number of steps taken
    const reduceNumber = (n, steps) => {

        // check if the number is even or odd
        // if even, divide by two
        // if odd, decrement by one
        if (n % 2 === 0) n /= 2
        else n -= 1
        
        // check if zero has been reached and either return the number of steps or recursively run the function again
        return n === 0 ?  steps : reduceNumber(n, steps+1)
    }
    
    // check if the number is greater than zero
    // if so, run the recursive function
    // if not, return 0, the function doesn't need to run
    return num > 0 ? reduceNumber(num, 1) : 0
}