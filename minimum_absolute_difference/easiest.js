function minimumAbsoluteDifference(arr) {
    arr.sort((a, b) => { return a - b })
    let minDif = Math.abs(arr[0] - arr[1])
    let currentDif

    for (let i = 1; i < arr.length - 1; i++){
        currentDif = Math.abs(arr[i] - arr[i + 1])
        if (currentDif < minDif) {
            minDif = currentDif
        }
    }
    return minDif
}
