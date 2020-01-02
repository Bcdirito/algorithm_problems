// Runtime 84 ms, Memory Usage 42.3 MB

const findTarget = (root, k) => {
    // initialize an empty object variable that will hold our sums and differences as key value pairs
    // initialize a boolean variable with a false value that will be our final return variable
    let sumObj = {}
    let finalBool = false
    
    // declare a hlper function that takes in a node.
    const findSum = (node) => {
        // check if there is a key of the node's value
        // if there is, then there is a pair that adds up to k. change the boolean variable's value to true.
        // if not, create a key value pair where the key is the difference of k and the value of the node, and the value of the node is the value of the key.
        if (sumObj[node.val] !== undefined) finalBool = true
        else sumObj[k - node.val] = node.val
        
        // check if the node has any branches and if the boolean variable is equal to false
        // if so, recursively run the faction for each branch
        if (node.left && finalBool === false) findSum(node.left)
        if (node.right && finalBool === false) findSum(node.right)
    }
    
    // run the helper function, starting with the root
    findSum(root)
    
    // return the final boolean value
    return finalBool
};