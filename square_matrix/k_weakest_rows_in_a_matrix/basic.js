const kWeakestRows = (mat, k) => {
    let iCount = {}
    
    for (let i = 0; i < mat.length; i++) {
        iCount[i] = 0
        for (const el of mat[i]) {
            if (el === 1) iCount[i] += 1
        }
    }
    
    return Object.keys(iCount).sort((a, b) => {return iCount[a] - iCount[b]}).slice(0, k)
};