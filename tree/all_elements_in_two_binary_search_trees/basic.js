const getAllElements = (root1, root2) => {
    const traverseTree = (leaf) => {
        vals.push(leaf.val)
        if (leaf.left) traverseTree(leaf.left)
        if (leaf.right) traverseTree(leaf.right)
    }
    
    let vals = []
    
    if (root1) traverseTree(root1)
    if (root2) traverseTree(root2)
    
    return vals.sort((a, b) => {return a - b})
};