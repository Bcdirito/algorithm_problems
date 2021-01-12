const isUnivalTree = (root) => {
    let history = []
    
    const getVals = (node) => {
        history.push(node.val)
        if (node.left) getVals(node.left)
        if (node.right) getVals(node.right)
    }
    
    getVals(root)
    
    return new Set(history).size === 1
};