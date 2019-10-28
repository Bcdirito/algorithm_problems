// Runtime 56ms, Memory Usage 35.5 MB

const deleteDuplicates = (head) => {
    
    // declare a helper function that takes in a node
    const getValue = (node) => {

        // check to see if there is a head
        // check to see if this is the last item
        if (node !== null && node.next !== null) {

            // if both conditions are true check to see if the current node's value is equal to the next node's value
            if (node.val === node.next.val) {

                // if so, set the next node's value equal to the following node's value
                node.next = node.next.next

                // then, recursively run the function again with the current node
                // we need to use the current node in case the next node is still a duplicate
                getValue(node)
            } else {

                // if no duplicate is found, move on to the next node
                getValue(node.next)
            }
        }
    }
    
    // run the recursive function on the input list
    getValue(head)
    
    // return the modified list
    return head
};