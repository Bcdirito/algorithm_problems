const isPalindrome = (head) => {
    if (head === null) return head
    
    const getVals = (node, arr) => {
        arr.push(node.val)
        if (node.next) return getVals(node.next, arr)
        else return arr
    }
    
    let allVals = getVals(head, [])
    let breakIdx = Math.ceil(allVals.length/2)
    
    for (let i = 0; i < breakIdx; i++) {
        if (allVals[i] !== allVals[allVals.length - i - 1]) return false
    }
    
    return true
    
};