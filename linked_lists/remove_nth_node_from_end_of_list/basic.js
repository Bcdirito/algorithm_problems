const removeNthFromEnd = (head, n) => {
    if (head == null || head.next === null) return null
    
    const getVals = (node, arr) => {
        arr.push(node.val)
        if(node.next !== null) return getVals(node.next, arr)
        else return arr
    }
    
    let valArr = getVals(head, [])
    valArr.splice(valArr.length-n, 1)
    
    if (valArr.length === 1) return new ListNode(valArr[0])
    
    let newList = new ListNode(valArr[0])
    
    const generateNewList = (node, idx) => {
        node.next = new ListNode(valArr[idx])
        idx += 1
        if (idx < valArr.length) generateNewList(node.next, idx)
    }
    
    generateNewList(newList, 1)
    
    return newList
};