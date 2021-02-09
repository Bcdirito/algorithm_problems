const maxLengthBetweenEqualCharacters = (s) => {
    let length;
    let splitS = s.split("")
    
    const getIdxs = (arr, val) => {
        let idxs = []
        
        for (let i = 1; i < arr.length; i++) {
            if (val === arr[i]) idxs.push(i)
        }
        
        return idxs
    }
    
    for (let i = 0; i < splitS.length - 1; i++) {
        let idxs = getIdxs(splitS, splitS[i])
        if (idxs.length > 0) {
            let diff = idxs[idxs.length - 1] - i - 1
            length = length === undefined || diff > length ? diff : length
        }
    }
    
    return length === undefined ? -1 : length
};