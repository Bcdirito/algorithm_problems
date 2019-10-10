const rotateString = (A, B) => {
    let rotStr;
    
    for (let i = 0; i < A.length; i++){
        if (A[i] === B[0]){
            rotStr = `${A.slice(i)}${A.slice(0, i)}`
            if (rotStr === B) return true
        }
    }
    
    return A === B
};