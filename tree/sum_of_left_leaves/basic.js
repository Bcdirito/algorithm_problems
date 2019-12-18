// Runtime 48 ms, Memory Usage 34.6 MB

const sumOfLeftLeaves = (root) => {
    // declare a variable with a value of zero
    // this variable will be the total sum of all of our left leaves
    let leftSum = 0
    
    // check if there is a root and if that root has any children
    // if so, run this block of logic
    if (root && (root.left || root.right)){
        // declare a helper function that takes in a node
        // this function will grab add all of the values of our left leaves to the above variable
       const getLeftVals = (node) => {        
            // check if there is a left node, then check if that left node has any subsequent nodes
            // if there are no subsequent nodes, that left node is a leaf
            // add the value of that leaf to the leftSum variable
            if (node.left && (!node.left.left && !node.left.right)) leftSum += node.left.val

            // check if there are left and right nodes
            // if there are, recursively run the function with those nodes respectively
            if (node.left) getLeftVals(node.left)
            if (node.right) getLeftVals(node.right)
        }

        // run the helper function
        getLeftVals(root) 
    } 
    
    // return the sum of the left leaves
    return leftSum
};