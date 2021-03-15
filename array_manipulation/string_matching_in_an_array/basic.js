const stringMatching = (words) => {    
    const checkMatch = (arr, word) => {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].includes(word)) return true
        }
        
        return false
    }
    
    return words.filter(word => {
        const copy = words.slice()
        copy.splice(words.indexOf(word), 1)
        return checkMatch(copy, word)
    })
};