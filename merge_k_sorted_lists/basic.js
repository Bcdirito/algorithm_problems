const mergeKLists = (lists) => {
    let flatVals = []

    const getVals = (node) => {
        if (node !== null) {
            flatVals.push(node.val)
            if (node.next !== null) getVals(node.next)
        }
    }

    for (let i = 0; i < lists.length; i++){
        getVals(lists[i])
    }
    
    if (flatVals.length === 0){
        return null
    } else {
        flatVals.sort((a, b) => {return a - b})

        let newList = new ListNode(flatVals[0])

        const createSortedList = (node, idx) => {
            node.next = new ListNode(flatVals[idx])
            idx += 1
            if(idx < flatVals.length) createSortedList(node.next, idx)
        }

        if (flatVals.length > 1) createSortedList(newList, 1)

        return newList   
    }
};