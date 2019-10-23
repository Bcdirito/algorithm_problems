const findWords = (words) => {
    let singleRowWords = []
    
    const objCreater = (str) => {
        let obj = {}
        
        for (let i = 0; i < str.length; i++){
            obj[str[i]] = i
        }
        
        return obj
    }
    
    let topRow = objCreater("qwertyuiop")
    let midRow = objCreater("asdfghjkl")
    let bottomRow = objCreater("zxcvbnm")
    
    const rowCheck = (row, word, originalCase) => {
        for (let i = 0; i < word.length; i++){
            if (row[word[i]] === undefined) return ""
        }
        
        singleRowWords.push(originalCase)
    }
    
    for (let i = 0; i < words.length; i++){
        let lowerWord = words[i].toLowerCase()
        if (topRow[lowerWord[0]] !== undefined) rowCheck(topRow, lowerWord, words[i])
        else if (midRow[lowerWord[0]] !== undefined) rowCheck(midRow, lowerWord, words[i])
        else rowCheck(bottomRow, lowerWord, words[i])
    }
    
    return singleRowWords
};