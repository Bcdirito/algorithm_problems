// Runtime 52 ms, Memory Usage 35.6 MB

const partition = (head, x) => {

    // check if the list is empty or only has one value
    // if either of these conditions are true return the head as there is no partitioning to be done
    if (head === null || head.next === null) return head
    
    // declare a helper function
    // this helper function will recursively iterate through the linked list and place values in their appropriate arrays
    const gatherValues = (node, val, moreEqualArr, lessArr) => {
        // check the value of the current node and push the value in the appropriate array argument
        if (node.val < val) lessArr.push(node.val)
        else moreEqualArr.push(node.val)
        
        // if there are more nodes in the list, recursively call the function again
        // if not return the concatinated array
        if (node.next !== null) return gatherValues(node.next, val)
        else return lessArr.concat(moreEqualArr)
    }
    
    // run the helper function and save the return to a variable
    let allVals = gatherValues(head, x, [], [])
    
    // initialize a new linked list with the first node's value being the first element of the array
    let newList = new ListNode(allVals[0])
    
    // declare a second helper function
    // this function will recursively generate our new linked list
    const generateNewList = (node, arr, idx) => {
        // initialize the next node with the value being the next element in the array
        node.next = new ListNode(arr[idx])
        
        // increment the index by one
        idx += 1

        // if the index is less than the length of the array, there are more elements to add and more nodes to create
        // recursively run the function again with the increment index and newly created node
        if (idx < arr.length) generateNewList(node.next, arr, idx)
    } 
    
    // run the helper function
    generateNewList(newList, allVals, 1)
        
    // return the newly created list
    return newList
};