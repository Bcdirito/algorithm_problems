var findWords = function(words) {
    let topRow = "qwertyuiop".split("")
    let midRow = "asdfghjkl".split("")
    let bottomRow = "zxcvbnm".split("")
    let singleRowWords = []
    
    const rowChecker = (word, origWord, row) => {
        for (let c = 0; c < word.length; c++){
            if (row.includes(word[c])){
                if (c === word.length - 1) singleRowWords.push(origWord)
                else continue
            } else break
        }
    }
    
    for (let i = 0; i < words.length; i++){
        let lowerWord = words[i].toLowerCase()
        if (topRow.includes(lowerWord[0])) {rowChecker(lowerWord, words[i], topRow)}
        else if (midRow.includes(lowerWord[0])) {rowChecker(lowerWord, words[i], midRow)}
        else {rowChecker(lowerWord, words[i], bottomRow)}
    }
    
    return singleRowWords
};