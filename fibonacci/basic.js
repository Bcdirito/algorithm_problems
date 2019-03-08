function fibonacci(N) {
    let store = [0, 1]
    let i = 1

    while (i < N){
        let sum = store[i] + store[i - 1]
        store.push(sum)
        i++
    }
        
    return store[i]
};