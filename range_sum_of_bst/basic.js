// Runtime 164 ms, Memory Usage 67.1 MB

const rangeSumBST = (root, L, R) => {
    // initialize a total variable
    // this will be our range sum we ultimately return
    let total = 0
    
    // declare a recursive helper function
    // it takes in a leaf
    const getSum = (leaf) => {

        // check if the leaf's value falls in the inclusive range
        // if so, add it to the total
        if (leaf.val >= L && leaf.val <= R) total += leaf.val
        
        // check if each leaf has a left and/or right leaf
        // if so, recurisvely run the function on that leaf
        if (leaf.left !== null) getSum(leaf.left)
        if (leaf.right !== null) getSum(leaf.right)
    }
    
    // run the helper function starting at the root
    getSum(root)
    
    // return the total
    return total
};