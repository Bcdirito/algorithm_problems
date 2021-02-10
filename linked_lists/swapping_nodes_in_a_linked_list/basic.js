// Runtime 604 ms, Memory Usage 80.7 MB
const swapNodes = (head, k) =>{
    // declare helper function that takes in an array and a node
    // the following helper function recursively generates a linked list
    const getVals = (node, arr) => {
        arr.push(node.val)
        if (node.next) return getVals(node.next, arr)
        return arr
    }
    
    // get an array of the vals
    // get the first val based on the input params
    // the first index will always be equal to the input param
    // get the second val and secondIdx
    // because of how indexing works, we have to do a little bit of manipulation
    const vals = getVals(head, [])
    const firstVal = vals[k-1]
    const firstIdx = k
    const secondVal = vals[vals.length-k]
    const secondIdx = vals.length-k+1
    
    // declare a second helper function
    // this will iterate throught the linked list and swap the values
    const swapVals = (node, idx) => {
        if (idx === firstIdx) node.val = secondVal
        else if (idx === secondIdx) node.val = firstVal
        
        if (node.next) swapVals(node.next, idx+1)
    }
    
    // run the helper function
    swapVals(head, 1)
    
    return head
};