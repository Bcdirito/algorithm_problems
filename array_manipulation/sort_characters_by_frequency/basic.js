const frequencySort = (s) => {
    let history = {}
    let sortStr = ""
    
    for (let i = 0; i < s.length; i++) {
        if (history[s[i]] !== undefined) history[s[i]] += 1
        else history[s[i]] = 1
    }
    
    const addToStr = (el, count) => {
        for (let i = 0; i < count; i++) {
            sortStr += el
        } 
    }
    
    const sortedKeys = Object.keys(history).sort((a, b) => {return history[b] - history[a]})
    
    for (const char of sortedKeys) {
        addToStr(char, history[char])
    }
    
    return sortStr
};