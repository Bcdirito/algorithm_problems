function tribonacci(signature,n){
    if (n === 0){
        // if n is equal to zero, return an empty array
        // an empty array has a length of zero
        return []
    } else if (n <= 3){
        // if n is less than or equal to 3, return a slice of the array starting at element 0 and being n elements long
        return signature.slice(0, n)
    } else {
        // declare two variables
        // array is equal to the input signature array we are given
        // remainder is equal to the length n - the length of the array variable
        let array = signature,
        remainder = n - 3

        // run this logic remainder times
        for (let i = 0; i < remainder; i++){
            // declare variable sum that is equal to the sum of the last 3 elements of the array
            let sum = array[array.length - 1] + array[array.length - 2] + array[array.length - 3]

            // push that sum into the array
            array.push(sum)
        }

        // return the array
        return array
    }
}