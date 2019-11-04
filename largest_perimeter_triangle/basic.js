// Runtime 104 ms, Memory Usage 38.4 MB

function largestPerimeter(A) {
    // sort a copy of the original Array
    let sortArr = A.slice(0).sort((a, b) => {return a-b})

    // declare a perimeter variable with a value of 0
    // like two sum, this will be used to compare perimeter lengths
    let largestPerim = 0
    
    for (let i = 0; i < sortArr.length - 2; i++){
        // check if the three elements can make a valid triangle
        if (sortArr[i] + sortArr[i+1] > sortArr[i + 2]){
            // get the perimeter of the triangle
            let sum = sortArr[i] + sortArr[i+1] + sortArr[i + 2]

            // compare the perimeter of the current triangle to the largestPerim variable
            if (sum > largestPerim){
                // if it is, make the largestPerim variable equal to the current triangle value
                largestPerim = sum
            }
        }
    } 
    
    // return the largestPerim
    return largestPerim
};