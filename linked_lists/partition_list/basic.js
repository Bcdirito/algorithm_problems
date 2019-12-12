const partition = (head, x) => {
    if (head === null || head.next === null) return head
    
    let lessThanArr = []
    let greaterThanEqualToArr = []
    
    const gatherValues = (node, val) => {
        if (node.val < val) lessThanArr.push(node.val)
        else greaterThanEqualToArr.push(node.val)
        
        if (node.next !== null) gatherValues(node.next, val)
    }
    
    gatherValues(head, x)
    
    let allVals = lessThanArr.concat(greaterThanEqualToArr)
    
    let newList = new ListNode(allVals[0])
    
    const generateNewList = (node, arr, idx) => {
        node.next = new ListNode(arr[idx])
        idx += 1
        if (idx < arr.length) generateNewList(node.next, arr, idx)
    } 
    
    generateNewList(newList, allVals, 1)
        
    return newList
};