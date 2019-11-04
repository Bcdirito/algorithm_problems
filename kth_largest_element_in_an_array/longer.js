// Runtime 104 ms, Memory Usage 35.7 MB

const findKthLargest = (nums, k) => {
    
    // declare a helper function
    // this function will insert the current value into the appropraite position in the given array
    // this is the under the hood for .sort() in JS
    const findInsert = (arr, val) => {

        // iterate through the input array
        for (let i = 0; i < arr.length - 1; i++){

            // check if the next element is greater than the current element
            if (arr[i+1] >= val){

                // if so, insert the current element into the next position
                arr.splice(i+1, 0, val)

                // return to break out of the function 
                return 
            }
        }
        
        // if you reach this point, no number is greater than the value
        // add the value to the end of the array
        arr.push(val)
    }
    
    // declare a second helper function
    // this function will sort through the input array
    const sortArr = (arr) => {

        // initialize an array with one element
        // that element is the first element in the input array
        let sort = [arr[0]]
        
        // iterate through the input array starting at index one since we've already dealt with the first element
        for (let i = 1; i < arr.length; i++){

            // if the current element is less than the first of the sorted array, add the element to the beginning of the array
            if (arr[i] <= sort[0]) sort.unshift(arr[i])

            // if not, run the findInsert function to find the appropriate position
            else findInsert(sort, arr[i])
            
        }
        
        // return the sorted array
        return sort
    }
    
    // run the sortArr function on the input array argument
    // then find the index of the kth largest element by subtracting k from the length of the array
    // return the element at that index
    return sortArr(nums)[nums.length - k]
};