const insertionSortList = (head) => {
    if (head === null) return null
    else if (head.next === null) return head
    else {
        const getVals = (node, arr) => {
            arr.push(node.val)
            if (node.next !== null) return getVals(node.next, arr)
            else return arr
        }

        let valArr = getVals(head, [])

        let sortArr = [valArr[0]]

        const addToSortArr = (arr, val) => {
            for (let i = 1; i < arr.length; i++) {
                if (val < arr[i]) {
                    arr.splice(i, 0, val)
                    return arr
                }
            }

            arr.push(val)
            return arr
        }

        for (let i = 1; i < valArr.length; i++){
            if (valArr[i] < sortArr[0]) sortArr.unshift(valArr[i])
            else addToSortArr(sortArr, valArr[i])
        }

        let newLinked = new ListNode(sortArr[0])

        const generateNewList = (node, idx) => {
            node.next = new ListNode(sortArr[idx])
            idx += 1
            if (idx < sortArr.length) generateNewList(node.next, idx)
        }

        generateNewList(newLinked, 1)

        return newLinked
    }
};