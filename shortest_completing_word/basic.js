const shortestCompletingWord = (licensePlate, words) => {
    let shortestWord;
    let lPObj = {}
        
    for (let i = 0; i < licensePlate.length; i++) {
        if (isNaN(licensePlate[i]) === true && licensePlate[i] !== " ") {
            if (lPObj[licensePlate[i].toLowerCase()] !== undefined) lPObj[licensePlate[i].toLowerCase()] += 1
            else lPObj[licensePlate[i].toLowerCase()] = 1
        }
    }
    
    const checkComplete = (word) => {
        let copyLPObj = Object.assign({}, lPObj)
        
        for (let i = 0 ; i < word.length; i++) {
            let lowerChar = word[i].toLowerCase()
            if (copyLPObj[lowerChar] !== undefined && copyLPObj[lowerChar] !== 0) copyLPObj[lowerChar] -= 1 
        }
        
        for (const key in copyLPObj) {
            if (copyLPObj[key] !== 0) return false   
        }
        
        return true
    }
    
    for (let i = 0; i < words.length; i++){
        if (checkComplete(words[i]) === true) {
            if (shortestWord === undefined || words[i].length < shortestWord.length) shortestWord = words[i]
        }
    }
    
    
    return shortestWord
};