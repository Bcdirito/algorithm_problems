function digitize(n) {
    //code here
    let numStr = String(n)
    let intArr = []
    
    for (let i = 0; i < numStr.length; i++){
      intArr.unshift(Number(numStr[i]))
    }
    
    return intArr
}