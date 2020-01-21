// Runtime 64ms, Memory Usage 35.6 MB

const duplicateZeros = (arr) => {
    // iterate through the argument array
    for (let i = 0; i < arr.length; i++){
        // check if the current value is equal to zero
        if (arr[i] === 0){
            // if so, insert another 0 into the array utilzing .splice()
            arr.splice(i, 0, 0)

            // then remove the last element in the array, as we are maintaining the original length
            arr.pop()

            // increment the index by one to skip the duplicated zero we just inserted
            i+=1
        }
    }
};