const isMonotonic = (A) => {
    var tonic = true
    
    const monoInc = arr => {
        for (let i = 0; i < arr.length -1; i++){
            if (arr[i] > arr[i+1]){
                tonic = false
                break
            }
        }
    }
    
    const monoDec = arr => {
        for (let i = 0; i < arr.length - 1; i++){
            if (arr[i] < arr[i+1]){
                tonic = false
                break
            }
        }
    }
    
    
    if (A.length > 1){
        for (let i = 0; i < A.length - 1; i++){
            if (A[i] !== A[i+1]){
                let reducedArr = A.slice(i)
                if (A[i] > A[i+1]) monoDec(reducedArr)
                else monoInc(reducedArr)
                break
            }
        }
    }
    
    return tonic
};