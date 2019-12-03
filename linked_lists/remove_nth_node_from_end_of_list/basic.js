// Runtime 60 ms, Memory Usage 35 MB

const removeNthFromEnd = (head, n) => {
    // if the head is null or the list is one element, then we no matter what we are going to return null
    if (head == null || head.next === null) return null
    
    // declare a helper function that takes in a node in the linked list and an array
    // this function will grab all the values from the list, remove the nth element, and return the revised array
    const getVals = (node, arr) => {
        // add the value fo the current node to the array
        arr.push(node.val)

        // if we are not at the end of our list, recursively run the function again with the next node in the list and our array
        if(node.next !== null) return getVals(node.next, arr)
        else {
            // if we've reached the end of the list, remove the nth element from the end of our array
            // then we can return the array
            arr.splice(arr.length-n, 1)
            return arr
        }
    }
    
    // initialize a variable with the value being the revised array
    const valArr = getVals(head, [])
    
    // if there is only one value in the array, return a ListNode of that value
    if (valArr.length === 1) return new ListNode(valArr[0])
    
    // if there are more, initialize a new linked list varaible with the value of the head being equal to the first value in the revised array
    let newList = new ListNode(valArr[0])
    
    // declare another helper function that takes in an index number and a node
    // this will generate our new linked list
    const generateNewList = (node, idx) => {
        // add another node to the list with value being the corresponding value in the revised array
        node.next = new ListNode(valArr[idx])
        
        // increment the index number by one
        idx += 1
        
        // if the index number is less than the length of the revised array, there are still values and nodes to add,
        // recursively call the function with the recently created node and incremented index
        if (idx < valArr.length) generateNewList(node.next, idx)
    }
    
    // call the helper function to generate the rest of the linked list
    generateNewList(newList, 1)
    
    // return the generated list
    return newList
};