// Runtime 3172ms, Memory Usage 76.4 MB

const dailyTemperatures = (T) => {
    // initialize an empty array variable
    // this variable will contain our wait times
    let waitTimes = []
    
    // declare a helper function that takes in a slice of the array
    // this helper function will get us our wait time
    const getWaitTime = (slice) => {
        
        // iterate through the slice
        // start at index one, since we'll be comparing to the first index throughout the loop
        for (let i = 1; i < slice.length; i++){

            // check if the current element is higher than the first element
            // if so return that index, since it is the wait time
            if (slice[0] < slice[i]) return i
        }

        // if you make it through the iterator, then there is no higher temperature
        // default to returning 0
        return 0
    }
    
    // iterate through the input array of temperatures
    for (let i = 0; i < T.length; i++){
        
        // run the helper method on each element and push the return value into the waitTimes array 
        waitTimes.push(getWaitTime(T.slice(i)))
    }
    
    // return the array
    return waitTimes
};