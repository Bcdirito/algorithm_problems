// Runtime 264 ms, Memory Usage 55.7 MB
const getAllElements = (root1, root2) => {
    // declare a recursive function to traverse through the tree
    const traverseTree = (leaf) => {
        vals.push(leaf.val)
        if (leaf.left) traverseTree(leaf.left)
        if (leaf.right) traverseTree(leaf.right)
    }
    
    // this variable will hold all of the values
    let vals = []
    
    // traverse through both trees if they have values
    if (root1) traverseTree(root1)
    if (root2) traverseTree(root2)
    
    // return the sorted
    return vals.sort((a, b) => {return a - b})
};