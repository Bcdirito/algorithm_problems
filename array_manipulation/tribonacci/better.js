const tribonacci = (n) => {
    // intialize a base tribonacci array
    // initialize a reducer function for the array that will give us the sum of the values
    let tribArr = [0, 1, 1]
    const reducer = (total, currentVal) => total + currentVal
    
    // starting with a base of two, iterate through this logic n - 2 times
    // change the value of the tribArr variable to be a new array with the following values (in order):
    // the second current element
    // the third current element
    // the sum of the the current three elements
    for (let i = 2; i < n; i++){
        tribArr = [tribArr[1], tribArr[2], tribArr.reduce(reducer)]
    }
    
    // check if n is greater than two
    // if so, return the last element in the array, which will always be two
    // if not, retun the value of the n-th index
    return n > 2  ? tribArr[2] : tribArr[n]
};