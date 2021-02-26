const searchMatrix = (matrix, target) => {
    for (let i = 0; i < matrix.length; i++) {
        if (matrix[i][matrix[i].length - 1] >= target) {
            return matrix[i].indexOf(target) !== -1
        }        
    }    
    
    return false
};