// Runtime 72 ms, Memory Usage 33.9 MB

function fibonacci(N) {
    // declare a store variable array
    // this is where we will store the sums we get from our while loop
    let store = [0, 1]

    // declare a counter
    let i = 1

    // run while the counter is less than the input N
    while (i < N){
        // add the last two elements of the array
        let sum = store[i] + store[i - 1]

        // push that sum into the store
        store.push(sum)

        // increase the counter
        i++
    }

    // return the last element of the store array
    // since i should be one less than our length of the array, i will be the last index
    return store[i]
};