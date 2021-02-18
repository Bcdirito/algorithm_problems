const maxLevelSum = (root) => {
    let valObj = {}
    
    const traverseTree = (leaf, lvl) => {
        if (valObj[lvl] === undefined) valObj[lvl] = [leaf.val]
        else valObj[lvl].push(leaf.val)
        
        if (leaf.left) traverseTree(leaf.left, lvl + 1)
        if (leaf.right) traverseTree(leaf.right, lvl + 1)
    }
    

    traverseTree(root, 1)
    
    let maxLevels = []
    let maxVal;
    
    const reducer = (totalVal, currentVal) => totalVal + currentVal
    
    for (const key in valObj) {
        const sum = valObj[key].reduce(reducer)
        if (maxVal === undefined || sum > maxVal) {
            maxVal = sum
            maxLevels = [key]
        } else if (maxVal === sum) {
            maxLevels.push(key)
        }
    }
    
    return maxLevels.sort((a, b) => { return a -b })[0]
};