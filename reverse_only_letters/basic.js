const reverseOnlyLetters = (S) => {
    let alphaStr = "abcdefghijklmnopqrstuvwxyz"
    let alphaObj = {}
    let revStr = ""
    
    for (let i = 0; i < alphaStr.length; i++){
        alphaObj[alphaStr[i]] = i
    }
    
    let filtStr = S.split("").filter(char => {
        return alphaObj[char.toLowerCase()] !== undefined
    })
    
    
    for (let i = 0; i < S.length; i++){
        if (alphaObj[S[i].toLowerCase()] !== undefined) revStr += filtStr.pop()
        else revStr += S[i]
    }
    
    return revStr
};