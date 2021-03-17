// Runtime 68ms, Memory Usage 38.4 MB
const threeConsecutiveOdds = (arr) => {
    for (let i = 0; i < arr.length - 2; i++) {
        if (arr[i] % 2 !== 0) {
            if (arr.slice(i, i+3).every(num => num % 2 !== 0) === true) return true
            else continue
        }
    }
    
    return false
};