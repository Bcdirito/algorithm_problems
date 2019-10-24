const reverseOnlyLetters = (S) => {
    let lowerMin = "a".charCodeAt()
    let lowerMax = "z".charCodeAt()
    let upperMin = "A".charCodeAt()
    let upperMax = "Z".charCodeAt()
    let revStr = ""

    
    let filtStr = S.split("").filter(char => {
        let charNumber = char.charCodeAt()
        return (charNumber <= lowerMax && charNumber >= lowerMin)  || (charNumber <= upperMax && charNumber >= upperMin)
    })
    
    
    for (let i = 0; i < S.length; i++){
        let charNumber = S[i].charCodeAt()
        if ((charNumber <= lowerMax && charNumber >= lowerMin)  || (charNumber <= upperMax && charNumber >= upperMin)) revStr += filtStr.pop()
        else revStr += S[i]
    }
    
    return revStr
};