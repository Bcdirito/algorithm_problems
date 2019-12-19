// Runtime 60 ms, Memory Usage 34.7 MB

const leafSimilar = (root1, root2) => {
    // declare an object with two keys
    // each key will be a placeholder for the leaves of each tree, and the value will be an empty array
    let leafObj = {
        first: [],
        second: []
    }
    
    // declare a helper function that takes in a node and a key
    const getLeaves = (node, key) => {
        // check if the node has any children
        // if it doesn't, it is a leaf, so push the value into the appropriate array
        if (!node.left && !node.right) leafObj[key].push(node.val)
        else {
            // if there are any children, recursively run the function again with the approriate child and key
            if (node.left) getLeaves(node.left, key)
            if (node.right) getLeaves(node.right, key)
        }
    }
    
    // run the helper function for each tree
    getLeaves(root1, "first")
    getLeaves(root2, "second")
    
    // utilizing object destructring, create a variable for each array of leaves
    const {first, second} = leafObj
    
    // check if the two arrays are the same length
    // if not, they are not similar and return false
    if (first.length !== second.length) return false
    else {
        // if they are the same length iterate through the first array
        for (let i = 0; i < first.length; i++) {
            // check to see if the value of the element equals the value of the corresponding element in the second array
            // if not return false
            if (first[i] !== second[i]) return false        
        }   
        
        // if you make it here, the leaves are similar, so return true.
        return true
    }
};