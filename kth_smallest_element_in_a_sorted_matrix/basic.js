// Runtime 96ms, Memory Usage 40.4 MB

const kthSmallest = (matrix, k) => {

    // declare an empty array variable
    // this will be our flattened matrix
    let flatArr = []
    
    // iterate through the matrix
    for (let i = 0;  i < matrix.length; i++){

        // push each array into the flat arr using the spread operator
        // this flattens our matrix into a single array
        flatArr.push(...matrix[i])
    }
    
    // sort the flat array in ascending order
    flatArr.sort((a, b) => {return a - b})
    
    // iterate through the flat array
    for (let i = 0; i < flatArr.length; i++){

        // if the current index is one less than k, it is the kth element
        // return that element
        if ((i + 1) === k) return flatArr[i]
    }
};