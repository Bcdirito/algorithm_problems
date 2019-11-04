function minimumAbsoluteDifference(arr) {
    // sort the array by value
    arr.sort((a, b) => { return a - b })

    // declare first minimum difference
    // let first difference be minimum difference to use for comparison
    let minDif = Math.abs(arr[0] - arr[1])

    // iterate through the array
    for (let i = 1; i < arr.length - 1; i++){
        // declare current difference
        // value is absolute difference between current and next index
        let currentDif = Math.abs(arr[i] - arr[i + 1])

        if (currentDif < minDif) {
            // if current difference is less than minimum difference, replace
            minDif = currentDif
        }
    }
    // return smallest difference
    return minDif
}
