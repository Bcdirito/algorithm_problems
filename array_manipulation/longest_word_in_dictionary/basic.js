const longestWord = (words) =>{
    
    words.sort((a, b) => {return b.length - a.length})
        
    let wordObj = {}
    let longestWord = ""
    
    for (let i = 0; i < words.length; i++) {
        wordObj[words[i]] = ""
    }
    
    const checkIfValid = (word, obj) => {
        for (let i = 0; i < word.length; i++){
            if (obj[word.slice(0, i+1)] === undefined) return false
        }
        
        return true
    }
    
    for (let i = 0; i < words.length; i++){
        if (words[i].length >= longestWord.length){
            if (checkIfValid(words[i], wordObj) === true && (longestWord.length < words[i].length ||  longestWord > words[i])) {
                longestWord = words[i]    
            }   
        } else {
            break
        }
    }
    
    return longestWord
};