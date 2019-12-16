const averageOfLevels = (root) => {
    let valObj = {}
    let averages = []
    
    const generateObj = (node, level) => {
        if(valObj[level] !== undefined) valObj[level].push(node.val) 
        else valObj[level] = [node.val]
        
        if (node.left) generateObj(node.left, level + 1)
        if (node.right) generateObj(node.right, level + 1)
    }
    
    generateObj(root, 0)
        
    const getAverage = (arr) => {
        let reducer = (total, currentVal) => total + currentVal
        let sum = arr.reduce(reducer)
        
        return sum/arr.length
    }
    
    for (const key in valObj) {
        if (valObj[key].length > 1) averages.push(getAverage(valObj[key]))
        else averages.push(valObj[key])
    }
    
    return averages
};