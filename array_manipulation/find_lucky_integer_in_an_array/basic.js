// Runtime 80 ms, Memory Usage 39.3 MB
const findLucky = (arr) => {
    // declare an object and an array
    // object will contain keys and corresponding occurrance amount
    // array will contain numbers with matching occurrance amounts
    const numObj = {}
    const luckyNums = []
    
    // iterate through the input array
    // increase they correct key in the numObj
    for (let i = 0; i < arr.length; i++) {
        numObj[arr[i]] = numObj[arr[i]] !== undefined ? numObj[arr[i]] + 1 : 1
    }
    
    // iterate through the object
    // if the key matches the value, push it into the array
    for (const key in numObj) {
        if (Number(key) === numObj[key]) luckyNums.push(key)
    }
    
    // return the last element of the array if the array has any elements
    // if not, return -1
    return luckyNums.length > 0 ? luckyNums[luckyNums.length - 1] : -1
};