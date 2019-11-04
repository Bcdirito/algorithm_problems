// Runtime 68ms, Memory Usage 39.9 MB

const matrixReshape = (nums, r, c) => {
    // initialize an empty array variable
    // this variable will be our flattened array
    let flatArr = []

    // initialize a reshaped array variable
    // this will be our reshaped matrix
    let reshape = []
    
    // iterate through the input nums argument array
    for (let i = 0; i < nums.length; i++){

        // push the spread row into the flattened array variable
        flatArr.push(...nums[i])
    }
    
    // iterate through the flattened array variable
    // note that in this for loop, we are increment by c
    // we do this, since c is the number of columns that each row needs to be, which is equal to the length of each slice
    for (let i = 0; i < flatArr.length; i+=c){
        
        // check to see if there is a slice equal to the number of columns the new matrix should have
        // if so, push that slice into the reshaped matrix
        if (flatArr.slice(i, i+c).length === c) reshape.push(flatArr.slice(i, i+c))
        
        // if not, we are unable to reshape the matrix
        // return the original matrix
        else return nums
    }
    
    // we need to do one final check to make sure there are the correct number of rows
    // if so, return the reshaped matrix variable
    if (reshape.length === r) return reshape

    // if not, return the original matrix
    else return nums
};