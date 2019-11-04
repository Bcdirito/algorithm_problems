// Runtime 52ms, Memory Usage 33.8 MB

const rotateString = (A, B) => {
    // Iterate through the first string
    for (let i = 0; i < A.length; i++){
        
        // check to see if the current character matches the first character of the second string
        if (A[i] === B[0]){
            // if so, create a new rotated string,
            // the first slice will be from where we currently are to the end of the string
            // the second slice will be from the beginning to the current index
            let rotStr = `${A.slice(i)}${A.slice(0, i)}`

            // check to see if this current rotation equals the second string
            if (rotStr === B) return true
        }
    }


    // if we have reached this point, none of the rotations equal the second string
    // if the two strings are equal or empty, than no rotations of the first would equal the second
    // check to see if the strings are equal, empty, or different, that will return the appropriate boolean value
    return A === B
};