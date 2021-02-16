// Runtime 80 ms, Memory Usage 45.8 MB
const isPalindrome = (head) => {
    // if head is empty return head
    if (head === null) return head
    
    // declare helper function
    // the following function is recursive
    // grabs all the values for each node
    const getVals = (node, arr) => {
        arr.push(node.val)
        if (node.next) return getVals(node.next, arr)
        else return arr
    }
    
    // save all the vals to an array variable
    // get the middle index of the array
    let allVals = getVals(head, [])
    let breakIdx = Math.ceil(allVals.length/2)
    
    // iterate up to the middle index
    // check outside in
    // if two elements don't match return false
    for (let i = 0; i < breakIdx; i++) {
        if (allVals[i] !== allVals[allVals.length - i - 1]) return false
    }
    
    // if you make it to this point, then the array has to be a palindrome
    return true
    
};