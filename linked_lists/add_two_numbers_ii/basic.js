const addTwoNumbers = (l1, l2) => {
    const getVals = (node, str) => {
        if (node !== null) str += node.val
        if (node.next !== null) return getVals(node.next, str)
        else return str
    }
    
    const reverseString = (str) => {
        let revStr = ""
        
        for (let i = 0; i < str.length; i++){
            revStr = str[i] + revStr
        }
        
        return revStr
    }
    
    let numArrOne = reverseString(getVals(l1, "")).split("").map(char => {
        return Number(char)
    })
    let numArrTwo = reverseString(getVals(l2, "")).split("").map(char => {
        return Number(char)
    })
        
    let extraVal = 0
    let sumArr = []
    let longerArr = numArrOne.length >= numArrTwo.length ? numArrOne : numArrTwo
    let shorterArr = numArrOne.length < numArrTwo.length ? numArrOne: numArrTwo
    
    for (let i = 0; i < longerArr.length; i++){
        let sum = 0
        
        if (shorterArr[i] !== undefined) sum = longerArr[i] + shorterArr[i]
        else sum = longerArr[i]
                
        if (extraVal > 0) {
            sum += extraVal
            extraVal = 0
        }
        
        if (sum >= 10) {
            extraVal = 1
            sum = sum % 10
        }
        
        sumArr.push(sum)
    }
    
    if (extraVal > 0) sumArr.push(extraVal)
    
    let sumList = new ListNode(sumArr.pop())
    
    const createSumList = (node, arr) => {
        node.next = new ListNode(arr.pop())
        if (arr.length > 0) createSumList(node.next, arr)
    }
    
    if (sumArr.length > 0) createSumList(sumList, sumArr)
    
    return sumList
};