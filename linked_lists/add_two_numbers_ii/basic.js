// Runtime 120 ms, Memory Usage 39.1 MB

const addTwoNumbers = (l1, l2) => {
    // declare a helper function
    // this function will help us get the vals of each list and reverse the order

    const getVals = (node, arr) => {
        // add the current val to the beginning of the array
        arr.unshift(node.val) 

        // if there are more nodes in the linked list, recursively run the function again
        // else return the array
        if (node.next !== null) return getVals(node.next, arr)
        else return arr
    }
    
    // since we return arrays from the helper function, we can make the elements of these two arrays the reversed values of the two input lists
    // to do so, run the recursive function for each list with the arr variable being an empty array
    let numArrOne = getVals(l1, [])
    let numArrTwo = getVals(l2, [])
        
    // declare a second helper function
    // this function will generate an array of the the values of both lists added together
    // it takes in both array variables
    const generateSumArr = (long, short) => {

            // declare an extra value array
            // this will be utilized whenever the sum is greater than 9
            let extraVal = 0

            // declare an empty array variable
            // this is what we will ultimately return
            let arr = []
            
            // iterate through the longer list
            for (let i = 0; i < long.length; i++){

                // initialize a sum with a value of zero
                let sum = 0
                
                // check to see if the current index has an element in both arrays
                // if it does, add those values together to find the sum
                // if not, set the sum equal to the current element
                if (short[i] !== undefined) sum = long[i] + short[i]
                else sum = long[i]

                // check if the previous value has left any extra value
                // if so, add it to the current sum and then reset the extra value to zero
                if (extraVal > 0) {
                    sum += extraVal
                    extraVal = 0
                }

                // after adding any extra value check if the current sum is 10 or greater
                // if so, increment the extra value by one and set the current sum to the remainder of the sum divided by 10
                if (sum >= 10) {
                    extraVal = 1
                    sum = sum % 10
                }

                // add that sum into the array variable
                arr.push(sum)
            }
        
            // check if any extraVal is remaining
            // if so, add it to the end of the array
            if (extraVal > 0) arr.push(extraVal)
            
            // return the final array
            return arr
    }
    
    // declare a variable that will be the sum of the two lists added together
    // to determine which array is longer, run a ternary operator comparing lengths and placing the arrays in the apporiate parameter
    let sumArr = numArrOne.length >= numArrTwo.length ? generateSumArr(numArrOne, numArrTwo) : generateSumArr(numArrTwo, numArrOne)
    
    // check if the current sum is more than 9
    // if not, return a ListNode of the single value
    if (sumArr.length === 1) return new ListNode(sumArr.pop())
    else {

        // if it is, begin a new Linked List by setting the head equal to the last item in the sum array, as the sum arrays is reversed of our final result
        let sumList = new ListNode(sumArr.pop())
        
        // declare a third helper function that takes in a node and an array
        const createSumList = (node, arr) => {
            // set the value of the next node to the last value in the sum array
            node.next = new ListNode(arr.pop())

            // if there are more values in the sum array, recursively run the function again
            if (arr.length > 0) createSumList(node.next, arr)
        }


        // run the function to create the sum list
        createSumList(sumList, sumArr)
        
        // return the sum list
        return sumList
    }
};