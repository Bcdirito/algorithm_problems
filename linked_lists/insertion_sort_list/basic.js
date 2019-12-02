// Runtime 68ms, Memory Usage 37.8 MB

const insertionSortList = (head) => {
    // if the head doesn't exist or there is only one value, we can simply just return the head
    if (head === null || head.next === null) return head
    
    // declare a helper function
    // this function will grab all the values of the linked list and create an array
    const getVals = (node, arr) => {
        // push the value of the node into an array
        arr.push(node.val)

        // if there is another node in the list, push that value into the array
        if (node.next !== null) return getVals(node.next, arr)

        // if not, return the array
        else return arr
    }

    // initialize a variable with the value being the return array of the helper function
    let valArr = getVals(head, [])

    // initialize another array with the first value being the first value of the previous array
    // this variable will be the sorted equivalent of the previous array
    let sortArr = [valArr[0]]

    // declare a second helper function
    // this will be our insertion sort helper function
    // it takes in an array and a value
    const addToSortArr = (arr, val) => {
        // iterate through the array starting at the second element
        // we start at the second element because we will check in a for loop if the value is less than the first element
        for (let i = 1; i < arr.length; i++) {
            // if the current element is greater than the value, this is where we need to insert the value into the array
            if (val < arr[i]) {
                // using .splice(), insert the value into this index in the array
                arr.splice(i, 0, val)
                // this is all we need to do in the function so we can return the array
                return arr
            }
        }

        // if we made it here, than the current value is greater than any element in the array
        // therefore, we push that value to the end of the array and return the array
        arr.push(val)
        return arr
    }

    // iterate through the original valArr starting at index one
    for (let i = 1; i < valArr.length; i++){
        // if the current element is less than the first value in the sorted array, then add it to the beginning of the sorted array using .unshift()
        if (valArr[i] < sortArr[0]) sortArr.unshift(valArr[i])

        // if not, use the helper function to find its place in the sorted array
        else addToSortArr(sortArr, valArr[i])
    }

    // once we have a sorted array, we can move onto creating the sorted linked list
    // initialize a new linked list with the first node's value being the first value in the sorted array
    let newLinked = new ListNode(sortArr[0])

    // declare a third helper function to create the linked list
    // it takes in a node and an index
    const generateNewList = (node, idx) => {
        // create the next node in the list with a value equal to the corresponding element in the sorted array
        node.next = new ListNode(sortArr[idx])

        // increase the index by one
        idx += 1

        // if the index is less than the length of the sorted array, then there are still nodes to generate
        // recursively call the function again with the most recently created node and the incremented index
        if (idx < sortArr.length) generateNewList(node.next, idx)
    }

    // run the helper function
    generateNewList(newLinked, 1)

    // return the sorted linked list
    return newLinked
}