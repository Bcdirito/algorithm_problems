function fibonacci(N) {
    // declare store variable as an arr
    // this is where we will store all the sum we get when running through the recursive
    let store = [0, 1]

    // set a counter equal to 1
    // this counter will keep track of how many times we need to run the recursive
    let i = 1
    
    // declare a recursive function
    const recursive = (number, check, arr) => {
        // sum is equal to the last two numbers in the sequence
        let sum = arr[number] + arr[number-1]

        // push the current sum into the store
        arr.push(sum)

        // increase the counter
        number++

        // if the counter is less than argument N, call the function again
        if (number < check){
            recursive(number, check, arr)
        }
    }

    // run through the recursive
    recursive(i, N, store)

    // return the last number of the array
    return store[store.length - 1]
};