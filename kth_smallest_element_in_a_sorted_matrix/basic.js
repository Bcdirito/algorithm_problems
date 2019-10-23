const kthSmallest = (matrix, k) => {
    let flatArr = []
    
    for (let i = 0;  i < matrix.length; i++){
        flatArr.push(...matrix[i])
    }
    
    flatArr.sort((a, b) => {return a - b})
    
    for (let i = 0; i < flatArr.length; i++){
        if ((i + 1) === k) return flatArr[i]
    }
};