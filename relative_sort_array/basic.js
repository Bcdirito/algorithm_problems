const relativeSortArray = (arr1, arr2) => { 
    let finalArr = []

    const generateObj = (arr) => {
        let obj = {}
        
        for (let i = 0; i < arr.length; i++){
            if (obj[arr[i]] !== undefined) obj[arr[i]] += 1
            else obj[arr[i]] = 1
        }
        
        return obj
    }
    
    const pushToArray = (amt, counter, val) => {
        finalArr.push(val)
        counter += 1
        
        if (counter < amt) pushToArray(amt, counter, val)
    }
    
    const appendExcessElements = (retArr, origArr) => {
        let arrayTwoObj = generateObj(arr2)
        let remArr = []
        
        for (let i = 0; i < origArr.length; i++){
            if (arrayTwoObj[origArr[i]] === undefined) remArr.push(origArr[i])
        }
        
        retArr.push(...remArr.sort((a, b) => {return a - b}))
        
        return retArr
    }
    
    
    let arrayOneObj = generateObj(arr1)
    
    for (let i = 0; i < arr2.length; i++){
        pushToArray(arrayOneObj[arr2[i]], 0, arr2[i])
    }
    
    return finalArr.length === arr1.length ? finalArr : appendExcessElements(finalArr, arr1)
};