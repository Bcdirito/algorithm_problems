const numberOfSteps = (num) => {
    const reduceNumber = (n, steps) => {
        if (n % 2 === 0) n /= 2
        else n -= 1
        
        return n === 0 ?  steps : reduceNumber(n, steps+1)
    }
    
    return num > 0 ? reduceNumber(num, 1) : num
}