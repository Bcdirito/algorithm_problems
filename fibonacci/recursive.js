function fibonacci(N) {
    let store = [0, 1]
    let i = 1
    
    const recursive = (number, check, arr) => {
        let sum = arr[number] + arr[number-1]
        arr.push(sum)
        number++
        if (number < check){
            recursive(number, check, arr)
        }
    }
    recursive(i, N, store)
    return store[store.length - 1]
};