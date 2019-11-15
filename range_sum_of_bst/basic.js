const rangeSumBST = (root, L, R) => {
    
    let total = 0
    
    const getSum = (leaf) => {
        if (leaf.val >= L && leaf.val <= R) total += leaf.val
        
        if (leaf.left !== null) getSum(leaf.left)
        if (leaf.right !== null) getSum(leaf.right)
    }
    
    getSum(root)
    
    return total
};