const reverseOnlyLetters = (S) => {
    const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let revStr = ""
    let reference = {}
    
    for (let i = 0; i < alphabet.length; i++) {
        reference[alphabet[i]] = true
    }
     
     let onlyAlpha = S.split("").filter(char => {
         return reference[char] === true
     })
     
     for (let i = 0; i < S.length; i++) {
         if (reference[S[i]] === true) revStr += onlyAlpha.pop()
         else revStr += S[i]
     }
     
     return revStr
 };