const swapNodes = (head, k) =>{
    
    const getVals = (node, arr) => {
        arr.push(node.val)
        if (node.next) return getVals(node.next, arr)
        return arr
    }
    
    const vals = getVals(head, [])
    const firstVal = vals[k-1]
    const firstIdx = k
    const secondVal = vals[vals.length-k]
    const secondIdx = vals.length-k+1
    
    const swapVals = (node, idx) => {
        if (idx === firstIdx) node.val = secondVal
        else if (idx === secondIdx) node.val = firstVal
        
        if (node.next) swapVals(node.next, idx+1)
    }
    
    swapVals(head, 1)
    
    return head
};