// Runtime 64 ms, Memory Usage 37.6 MB

const isUnivalTree = (root) => {
    // define an array variable that will hold all of the values
    let history = []
    
    // define a helper function that traverses through the tree
    const getVals = (node) => {
        history.push(node.val)
        if (node.left) getVals(node.left)
        if (node.right) getVals(node.right)
    }
    
    // call the helper function
    getVals(root)
    
    // create a set from the array variable
    // we do this since Sets have unique values
    // check if the set only has a size of 1
    // this will check if the tree is univalued
    return new Set(history).size === 1
};