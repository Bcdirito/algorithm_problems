function isAnagram(s, t) {
    let tArr = t.split("")
    
    for (let i = 0; i < s.length; i++){
        if (!tArr.includes(s[i])){
            return false
        } else {
            let ind = tArr.indexOf(s[i])
            tArr.splice(ind, 1)
        }
    }
    
    return tArr.length === 0
};