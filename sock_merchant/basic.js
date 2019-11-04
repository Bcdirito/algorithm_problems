function sockMerchant(ar) {
    // create a history object.
    // will use it to store pairs later.
    let sockObj = {}

    // iterate through the array of socks
    for (let i = 0; i < ar.length; i++){
        if (sockObj[ar[i]]) {
            // if you have already found a matching sock, increase the value in the sock object
            // this is the easiest way to keep track of what has a pair.
            sockObj[ar[i]] += 1
        } else {
            // if this is the first index of a sock, add a key-value pair to the object
            sockObj[ar[i]] = 1
        }
    }

    // create an array of all the values
    let values = Object.values(sockObj)

    // create a count of the amount of pairs we have.
    let finalPairVal = 0

    // iterate through the values array.
    for (let i = 0; i < values.length; i++){
        if (values[i] >= 2) {
            // if you have two or more of a sock, you have at least one pair.
            // since two socks make a pair, divide the amount of that sock by two.
            // round down to the nearest whole number, since that will be the amount of pairs you have.
            finalPairVal += Math.floor(values[i] / 2)
        }
    }
    return finalPairVal
}