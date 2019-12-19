const leafSimilar = (root1, root2) => {
    let leafObj = {
        first: [],
        second: []
    }
    
    const getLeaves = (node, key) => {
        if (!node.left && !node.right) leafObj[key].push(node.val)
        else {
            if (node.left) getLeaves(node.left, key)
            if (node.right) getLeaves(node.right, key)
        }
    }
    
    getLeaves(root1, "first")
    getLeaves(root2, "second")
    
    const {first, second} = leafObj
    
    if (first.length !== second.length) return false
    else {
        for (let i = 0; i < first.length; i++) {
            if (first[i] !== second[i]) return false        
        }   
        
        return true
    }
};