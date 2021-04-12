const kWeakestRows = (mat, k) => {
    history = {}
    
    for (let i = 0; i < mat.length; i++) {
        const strength = mat[i].indexOf(0)
        history[i] = strength === -1 ? mat[i].length : strength
    }
    
    return Object.keys(history).sort((a, b) => history[a] - history[b]).slice(0, k)
};