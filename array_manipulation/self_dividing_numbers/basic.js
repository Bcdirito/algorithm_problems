selfDividingNumbers = (left, right) => {
    let selfDivArr = []
    
    const checkSelfDividing = (num) => {
        let stringNum = String(num)
        let splitNum = stringNum.split("").filter(char => {
            return num % Number(char) === 0
        })
        
        return splitNum.length === stringNum.length
    }
    
    for (let i = left; i <= right; i++) {
        if (i < 10) selfDivArr.push(i)
        else if (i % 10 !== 0 && checkSelfDividing(i) === true) selfDivArr.push(i)
    }
    
    return selfDivArr
};