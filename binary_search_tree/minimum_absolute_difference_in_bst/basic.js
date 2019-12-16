const getMinimumDifference = (root) => {
    let allVals = []
    
    const getTreeVals = (node) => {
        allVals.push(node.val)
        
        if (node.left) getTreeVals(node.left)
        if (node.right) getTreeVals(node.right)
    }
    
    
    getTreeVals(root)
    
    let minDiff;
        
    const getLowestDifference = (num, arr) => {
        for (let i = 0; i < arr.length; i++) {
            let diff = Math.abs(num - arr[i])
            if (!minDiff || minDiff > diff) minDiff = diff
        }
    }
    
    for (let i = 0; i < allVals.length - 1; i++){
        getLowestDifference(allVals[i], allVals.slice(i+1))
    }
    
    return minDiff
};