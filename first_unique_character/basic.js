function firstUniqChar(s) {
    const splitStr = s.split("")
        let history = {}
        
        for (let i = 0; i < splitStr.length; i++){
            if (history[splitStr[i]]){
                history[splitStr[i]] += 1
            } else {
                history[splitStr[i]] = 1
            }
        }
        
        for (const key in history){
            if (history[key] === 1){
                return s.indexOf(key)
            }
        }
        return - 1
}