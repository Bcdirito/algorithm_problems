const halvesAreAlike = (s) => {
    const consonants = "bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ"
    const vowels = "aeiouAEIOU"
    
    const generateObj = (str) => {
        let obj = {}
        
        for (const char of str) {
            obj[char] = ""
        }
        
        return obj
    }
    
    const consObj = generateObj(consonants)
    const vowelsObj = generateObj(vowels)
        
    const midIdx = s.length / 2
    
    const countChars = (arr) => {
        let constCount = 0
        let vowelCount = 0
        
        for (const el of arr) {
            if (consObj[el] !== undefined) constCount += 1
            else vowelCount += 1
        }
        
        return [constCount, vowelCount]
    }
    
    let firstArr = countChars(s.split("").slice(0, midIdx))
    let secondArr = countChars(s.split("").slice(midIdx))
    
    return firstArr[0] === secondArr[0] && firstArr[1] === secondArr[1]
};