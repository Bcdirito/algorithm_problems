const findTarget = (root, k) => {
    let sumObj = {}
    let finalBool = false
    
    const findSum = (node) => {
        if (sumObj[node.val] !== undefined) finalBool = true
        else sumObj[k - node.val] = node.val
        
        if (node.left && finalBool === false) findSum(node.left)
        if (node.right && finalBool === false) findSum(node.right)
    }
    
    findSum(root)
    
    return finalBool
};