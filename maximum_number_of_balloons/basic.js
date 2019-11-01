const maxNumberOfBalloons = (text) => {
    const createObj = (str) => {
        let obj = {}
        
        for (let i = 0; i < str.length; i++){
            if (obj[str[i]] !== undefined) obj[str[i]] += 1
            else obj[str[i]] = 1
        }    
        
        return obj
    }
    
    let balloonObj = createObj("balloon")
    let textObj = createObj(text)
    
    const generateBalloons = (tObj, bObj, total) => {
        for (const key in bObj){
            if (tObj[key] !== undefined && tObj[key] - bObj[key] >= 0) tObj[key] -= bObj[key]
            else return total
        }
        
        
        return generateBalloons(tObj, bObj, total+1)
    }
    
    return generateBalloons(textObj, balloonObj, 0)
};