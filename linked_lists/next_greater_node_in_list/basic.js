// Runtime 4324 ms, Memory Usage 45 MB

const nextLargerNodes = function(head) {

    // declare an empty array variable
    // this array will contain our next greatest variables
    let finalAnswer = []
    
    // declare a helper function
    // this function will find the next greatest value in the list
    // it will take in the current value, and the next node
    const findNextGreatest = (val, next) => {
        // if the the next node is greater than the current value, return the value of the next node
        if (next.val > val) return next.val

        // if not and we are not at the end of the list, recursively run the function again
        else if (next.next !== null) return findNextGreatest(val, next.next)

        // if we are at the end of the list, return 0 since there is no value greater than the current value
        else return 0
    }
    
    // declare a second helper function
    // this function will iterate through our linked list
    // it takes in the current node to be checked
    const iterateThroughList = (node) => {
        // check if the next node isn't null
        if (node.next !== null) {

            // if it isn't push in the return value of our previous helper function
            finalAnswer.push(findNextGreatest(node.val, node.next))

            // recursively run the function again to iterate through the next value
            iterateThroughList(node.next)
        }
    }   
    
    // call the iterative helper function
    iterateThroughList(head)

    // push in 0 to the end of our final array
    // we do this since there will never be a value greater than the final value
    finalAnswer.push(0)
    
    // return that final answer array
    return finalAnswer
};