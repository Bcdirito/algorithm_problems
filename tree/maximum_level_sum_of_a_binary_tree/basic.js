// Runtime 192 ms, Memory Usage 56.4 MB
const maxLevelSum = (root) => {
    // declaure an empty object
    // key -> level number
    // value -> array of all values for each level
    let valObj = {}
    
    // declare a recursive function that takes in a level number and leaf
    // this function will recursively grab all the individual values from traversing the tree and save them to the appropirate level key
    const traverseTree = (leaf, lvl) => {
        if (valObj[lvl] === undefined) valObj[lvl] = [leaf.val]
        else valObj[lvl].push(leaf.val)
        
        if (leaf.left) traverseTree(leaf.left, lvl + 1)
        if (leaf.right) traverseTree(leaf.right, lvl + 1)
    }
    
    // run the helper function, starting at the root
    traverseTree(root, 1)
    
    // declare two more variables
    // one will hold the level of the current max value
    // the other will be the max value
    let maxLevel;
    let maxVal;
    
    // declare a variable to user for the reducer
    const reducer = (totalVal, currentVal) => totalVal + currentVal
    
    // iterate through the object
    // for each level get the sum using the reducer
    // if it's more than the max val, update the maxVal and maxLevels variables
    for (const key in valObj) {
        const sum = valObj[key].reduce(reducer)
        if (maxVal === undefined || sum > maxVal) {
            maxVal = sum
            maxLevel = key
        }
    }
    
    return maxLevel
};