function digitize(n) {
    let revArr = String(n).split("").reverse()
    let intArr = []
    
    for (let i = 0; i < revArr.length; i++){
      intArr.push(Number(revArr[i]))
    }
    
    return intArr
}