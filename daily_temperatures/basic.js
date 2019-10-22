const dailyTemperatures = (T) => {
    let waitTimes = []
    
    const getWaitTime = (slice) => {
        for (let i = 1; i < slice.length; i++){
            if (slice[0] < slice[i]) return i
        }
        
        return 0
    }
    
    for (let i = 0; i < T.length; i++){
        waitTimes.push(getWaitTime(T.slice(i)))
    }
    
    return waitTimes
};