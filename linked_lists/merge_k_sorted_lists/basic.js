// Runtime 80 ms, Memory Usage 39.2 MB

const mergeKLists = (lists) => {

    // initialize an empty array variable
    // this array will contain the the values of every list in our lists argument
    let flatVals = []

    // declare a helpful function
    // we will run this function for each list in our lists argument to extract the values
    const getVals = (node) => {
            // if it is not, add the current value to our flatVals array
            flatVals.push(node.val)

            // if there is another node, recursively run the function again
            if (node.next !== null) getVals(node.next)
        }
    }

    // iterate through the lists argument and run the getVals helper function on each list
    // we use the if statement to make sure we don't pass in an empty list
    for (let i = 0; i < lists.length; i++){
        if (lists[i] !== null) getVals(lists[i])
    }
    
    // check if our flatVals array has any values in it
    // if not we can return null, since we've been passed in an empty list of lists
    if (flatVals.length === 0){
        return null
    } else if (flatVals.length === 1) {

        // if there is only value in flatVals return a ListNode of just that value
        return new ListNode(flatVals[0])
        
    } else {

        // if there are values in flatVals, sort them in ascending order
        flatVals.sort((a, b) => {return a - b})

        // create a newList with the head node being equal to the first value in the sorted flatVals array
        let newList = new ListNode(flatVals[0])

        // declare another helper function
        // we will use this to iterate through our flatVals array and create the new sorted linked list
        // it takes in the last node in the list and an index number
        const createSortedList = (node, idx) => {
            // add a node to the list
            // the value of the node is the value of the current index in the flatVals array
            node.next = new ListNode(flatVals[idx])

            // increment the index by one
            idx += 1

            // if the index number is less than the length of the flatVals array, there are still more values to add.
            // if that is the case, recursively run the function again
            if(idx < flatVals.length) createSortedList(node.next, idx)
        }

        // if the length of flatVals is greater than one, we need to recursively add all the remaining values to that list
        // if so, run the function
        if (flatVals.length > 1) createSortedList(newList, 1)

        return newList   
    }
};