const reverseStr = (s, k) => {
    let revIdx = 0
    let finalStr = ""
    
    const revSlice = (str) => {
        let reverse = ""
        for (let i = 0; i < str.length; i++){
            reverse = str[i] + reverse
        }
        
        return reverse
    }
    
    for (let i = 0; i < s.length; i++){
        if (i === revIdx) {
            finalStr += revSlice(s.slice(i, i+k))
            i+=k-1
            revIdx += (k*2)
        } else {
            finalStr += s[i]
        }
    }
    
    
    return finalStr
 };