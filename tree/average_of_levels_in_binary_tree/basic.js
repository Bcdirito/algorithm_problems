// Runtime 60 ms, Memory Usage 38.7 MB

const averageOfLevels = (root) => {
    // intial an empty object and array variable.
    // we will use the object to extract the values of the tree by level
    // the array will be the collection of averages we've made from the values of the tree
    let valObj = {}
    let averages = []
    
    // declare a helper function
    // this function will extract the values from the tree and place them into the approriate level (key) in our valObj variable
    // it takes in a level (key) and a node
    const generateObj = (node, level) => {
        // first check if there is already a key equal to the current level in our valObj
        // if there is, add the current value to that key
        // if not, initialize the key with a value of an array containing the current value
        if(valObj[level] !== undefined) valObj[level].push(node.val) 
        else valObj[level] = [node.val]
        
        // recursively run the function with each respective next branch and its appropriate level
        if (node.left) generateObj(node.left, level + 1)
        if (node.right) generateObj(node.right, level + 1)
    }
    
    // run the helper function to fill in the valObj variable
    generateObj(root, 0)

    // declare a second helper function that takes in an array
    // this function will grab the averages for each level in our tree that contains more than one value
    const getAverage = (arr) => {
        // declare a reducer that gets the sum of the array
        let reducer = (total, currentVal) => total + currentVal

        // use the reducer to get the sum of the array
        let sum = arr.reduce(reducer)
        
        // return the average by dividing the sum by the length of the array
        return sum/arr.length
    }
    
    // iterate through the valObj variable
    for (const key in valObj) {
        // if the current key's value is an array with more than one element, get the average by using the helper function
        // once you have the helper function, push the return value into the averages array variable
        // if there is only one value, push that singular value into the array
        if (valObj[key].length > 1) averages.push(getAverage(valObj[key]))
        else averages.push(valObj[key][0])
    }
    
    // return the averages variable
    return averages
};