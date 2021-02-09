// Runtime 80 ms, Memory Usage 40.2 MB
const maxLengthBetweenEqualCharacters = (s) => {
    // declare two variables
    // declare a length variable with no value
    // split the string by character
    let length;
    let splitS = s.split("")
    
    // declare a helper function
    // this function grabs the index of any characters matching the value
    // this helps if there are more than two equal characters
    const getIdxs = (arr, val) => {
        let idxs = []
        
        for (let i = 1; i < arr.length; i++) {
            if (val === arr[i]) idxs.push(i)
        }
        
        return idxs
    }
    
    // iterate through the split string
    // if there are matching characters, get the greatest difference
    for (let i = 0; i < splitS.length - 1; i++) {
        let idxs = getIdxs(splitS, splitS[i])
        if (idxs.length > 0) {
            let diff = idxs[idxs.length - 1] - i - 1
            length = length === undefined || diff > length ? diff : length
        }
    }
    
    // if no matching characters, return -1
    // else return the greatest difference
    return length === undefined ? -1 : length
};