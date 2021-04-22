const isPowerOfThree = (n) => {
    if (n === 1 || n === 3) return true
    else if (n % 3 !== 0) return false
    
    const checkPower = (checkNum, power) => {
        const exp = 3**power
        if (exp > checkNum) return false
        else if (exp === checkNum) return true
        else return checkPower(checkNum, power + 1)
    }
    
    return checkPower(n, 2)
};