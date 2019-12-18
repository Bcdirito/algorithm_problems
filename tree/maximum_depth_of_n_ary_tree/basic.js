const maxDepth = (root) => {
    if (root === null) return root
    
    let maxLevel = 0
    
    const traverseTree = (node, level) => {
        if (level >= maxLevel) maxLevel = level
        if (node.children) {
            for (let i = 0; i < node.children.length; i++){
                traverseTree(node.children[i], level + 1)   
            }
        }
    }
    
    traverseTree(root, 1)
    
    return maxLevel
};