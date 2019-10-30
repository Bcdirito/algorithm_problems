// Runtime 56ms, Memory Usage 33.8 MB

const relativeSortArray = (arr1, arr2) => { 
    // initialize an empty array variable
    // this array will be what is ultimately returned
    let finalArr = []

    // declare a helper function
    // this function will convert an array to an object
    const generateObj = (arr) => {

        // declare an empty object
        let obj = {}
        
        // iterate through the array
        for (let i = 0; i < arr.length; i++){
            // if there is a key value pair, increment the value by one
            // if not, create a key value pair with the value being equal to one
            if (obj[arr[i]] !== undefined) obj[arr[i]] += 1
            else obj[arr[i]] = 1
        }
        
        // return that object
        return obj
    }

    // declare a second helper function
    // this function recursively adds values to the final array
    // it takes in three arguments: the amount of times we need to push in the value into the array, the amount of times we've pushed into the array, and the value
    const pushToArray = (amt, counter, val) => {

        // push the value into the final array
        finalArr.push(val)

        // increment the counter by one
        counter += 1
        
        // if the counter is less than the total amount, recursively run the function again
        if (counter < amt) pushToArray(amt, counter, val)
    }
    
    // declare a third helper function
    // this function adds in the sorted elements not found in the second array
    // it takes in two arguments, the array that will ultimately be returned and the original array
    const appendExcessElements = (retArr, origArr) => {

        // create an object of the second array utilizing the generateObj helper function
        let arrayTwoObj = generateObj(arr2)

        // declare an empty remainder array
        let remArr = []
        
        // iterate through the original array argument
        for (let i = 0; i < origArr.length; i++){

            // if there is no occasion of the current element in the arrayTwoObj object, then it doesn't occur in the second array
            // push it into the remainder array variable
            if (arrayTwoObj[origArr[i]] === undefined) remArr.push(origArr[i])
        }
        
        // sort the remainder array
        // spread the remainder array
        // push the spread into the return array
        retArr.push(...remArr.sort((a, b) => {return a - b}))
        
        return retArr
    }
    
    // create an object of the first array
    let arrayOneObj = generateObj(arr1)
    
    // iterate through the second array
    for (let i = 0; i < arr2.length; i++){
        // push the current element the appropriate amount of times into the final array
        pushToArray(arrayOneObj[arr2[i]], 0, arr2[i])
    }
    
    // check the final array length with the original array length
    // if they match, it has been apporiately sorted
    // if not, we need to append elements not found in arr2
    // return either array
    return finalArr.length === arr1.length ? finalArr : appendExcessElements(finalArr, arr1)
};