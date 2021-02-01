// Runtime 92 ms, Memory Usage 39 MB 
const kthFactor = (n, k) => {
    // declare a helper function
    const getFactors = (num) => {
        // declare an array variable that will hold the factors
        // get the middle index
        // use Math.floor() in case the num param is odd
        let factors = [1, num]
        let mid = Math.floor(num/2)
        
        // iterate through the middle index
        // check if the number is divisible by the iterated element
        // if so add to factors array 
        for (let i = 2; i <= mid; i++) {
            if (num % i === 0) factors.push(i)
        }
        
        // return a sorted array of the factors
        return factors.sort((a, b) => {return a - b})
    }
    
    // run the helper method
    const factors = getFactors(n)
    
    // check if factors has correct number of elements
    // if so, return element at index minus one
    // else return -1
    return factors[k-1] !== undefined ? factors[k-1] : -1
};