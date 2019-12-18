// Runtime 60ms, Memory Usage 37.3 MB

const maxDepth = (root) => {
    // check if the tree exists
    // if not the answer is null so we may return the root
    if (root === null) return root
    
    // declare a variable with a value of zero
    // this variable will be our maximum depth, and we will use it to check depths
    let maxLevel = 0
    
    // declare a helper function that takes in a node and a level
    // this function will traverse our tree
    const traverseTree = (node, level) => {
        // check the current level against the maxLevel variable
        // if it is more, make it the current level the value of the maxLevel variable
        if (level > maxLevel) maxLevel = level

        // check if the current node has any children
        if (node.children) {
            // if it does, iterate through each child and recursively call the function again to find the maximum depth level
            for (let i = 0; i < node.children.length; i++){
                traverseTree(node.children[i], level + 1)   
            }
        }
    }
    
    // call the helper function
    traverseTree(root, 1)
    
    // return the max level
    return maxLevel
};