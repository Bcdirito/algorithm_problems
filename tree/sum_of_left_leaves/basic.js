const sumOfLeftLeaves = (root) => {
    let leftSum = 0
    
    if (root){
       const getLeftVals = (node) => {        
            if (node.left && (!node.left.left && !node.left.right)) leftSum += node.left.val

            if (node.left) getLeftVals(node.left)
            if (node.right) getLeftVals(node.right)
        }

        getLeftVals(root) 
    } 
    
    return leftSum
};