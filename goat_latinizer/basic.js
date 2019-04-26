function toGoatLatin(S) {
    let splitStr = S.split(" ")
    let goatArr = []
    let goatWord = ""
    
    for (let i = 0; i < splitStr.length; i++){
        if ("aeiou".includes(splitStr[i][0].toLowerCase())) goatWord = splitStr[i] + "ma"
        else goatWord = splitStr[i].substring(1) + splitStr[i][0] + "ma"
        for (let n = 0; n <= i; n++){
            goatWord += "a"
            if (n === i) goatArr.push(goatWord)
        }
    }
    
    return goatArr.join(" ")
};