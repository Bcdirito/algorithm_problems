const addDigits = (num) => {
    if (num >= 10){
        const getSum = (number) => {
            let numArr = String(number).split("").map(char => {
                return Number(char)
            })
            const reducer = (total, currentVal) => total + currentVal
            
            let sum = numArr.reduce(reducer)
            

            if (sum >= 10) return getSum(sum)
            else return sum
        }
    
        return getSum(num)   
    } else {
        return num
    }
};