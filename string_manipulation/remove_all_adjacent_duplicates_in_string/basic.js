// Runtime 532 ms, Memory Usage 39.5 MB

const removeDuplicates = (S) => {

    // convert the string into an array
    let copyArr = S.split("")
    
    // iterate through the array
    for (let i = 0; i < copyArr.length; i++){

        // check if the current element is equal to the next element
        if (copyArr[i] === copyArr[i+1]) {

            // if it is, remove both elements
            copyArr.splice(i, 2)

            // return to the beginning of the array,
            // this must be done in case removal created adjacent elements
            i = -1
        }
    }
    
    // return the copy array as a joined string
    return copyArr.join("")
};