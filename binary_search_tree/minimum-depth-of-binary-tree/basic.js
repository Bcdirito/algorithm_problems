const minDepth = (root) => {
    
    if (root === null) return 0
    
    let lowestDepth;
    
    const traverseTree = (node, level) => {
        if (node.left === null && node.right === null) {
            if (lowestDepth === undefined || lowestDepth > level) lowestDepth = level
        } else {
            if (node.left) traverseTree(node.left, level + 1)
            if (node.right) traverseTree(node.right, level + 1)
        }
    }
    
    traverseTree(root, 1)
    
    return lowestDepth
};