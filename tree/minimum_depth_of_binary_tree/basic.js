// Runtime 56 ms, Memory Usage 37.5 MB

const minDepth = (root) => {
    // check if the root has any value
    // if not, the tree doesn't exist and there will be 0 depth.
    if (root === null) return 0
    
    // intialize an undefined variable that will hold our lowest depths
    let lowestDepth;
    
    // declare a helper function to traverse through the tree
    // it takes in the current node and the level of that node
    const traverseTree = (node, level) => {
        // check if the node is a leaf (has no left or right branch)
        if (node.left === null && node.right === null) {
            // if the node is a leaf, check if either the lowestDepth variable is undefined or the current level is lower than the current lowest depth
            // if either of those are true, set the current level as the new lowestDepth
            if (lowestDepth === undefined || lowestDepth > level) lowestDepth = level
        } else {
            // the node is not a leaf, recursively run the function again with the respective branches that exist and the level increased by one
            if (node.left) traverseTree(node.left, level + 1)
            if (node.right) traverseTree(node.right, level + 1)
        }
    }
    
    // run the helper function
    traverseTree(root, 1)
    
    // return the lowestDepth variable
    return lowestDepth
};