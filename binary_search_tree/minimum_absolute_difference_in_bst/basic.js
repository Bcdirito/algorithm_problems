// Runtime 184 ms, Memory Usage 42.1 MB

const getMinimumDifference = (root) => {
    // initialize an empty array that will eventually hold all of the values from the tree
    let allVals = []

    // declare a helper function that takes in a node
    // this function will gather all of the values from the tree
    const getTreeVals = (node) => {
        // push the value of the array into the allVals variable
        allVals.push(node.val)
        
        // recursively run the function for each existing branch
        if (node.left) getTreeVals(node.left)
        if (node.right) getTreeVals(node.right)
    }
    
    // run the function
    getTreeVals(root)

    // initialize another variable whose starting value will be the absolute difference between the first two elements in the array
    let minDiff = Math.abs(allVals[0] - allVals[1])
    
    // declare a second helper function that takes in a number and an array
    const getLowestDifference = (num, arr) => {
        
        // iterate through the array
        for (let i = 0; i < arr.length; i++) {
            
            // get the aboslute difference between the number argument and each value in the array
            let diff = Math.abs(num - arr[i])
            
            // then check if the minDiff variable is undefined or greater than the diff variable
            // if either of those statements are true, set the value of minDiff to the value of diff
            if (!minDiff || minDiff > diff) minDiff = diff
        }
    }
    
    // iterate through the allVals array
    for (let i = 0; i < allVals.length - 1; i++){
        // call the helper function
        getLowestDifference(allVals[i], allVals.slice(i+1))
    }
    
    // return the value of the minDiff variable
    return minDiff
};