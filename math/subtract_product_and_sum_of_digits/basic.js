const subtractProductAndSum = (n) => {
    let numArr = String(n).split("").map(char => {
        return Number(char)
    })
    
    const getProduct = (arr) => {
        let product = 1
        
        for (let i = 0; i < arr.length; i++){
            product *= arr[i]
        }
        
        return product
    }
    
    const getSum = (arr) => {
        let reducer = (total, currentVal) => total + currentVal
        
        return arr.reduce(reducer)
    }
    
    return getProduct(numArr) - getSum(numArr)
};