const searchMatrix = (matrix, target) => {
    for (const row of matrix) {
        if (row[row.length - 1] >= target) {
            return row.indexOf(target) !== -1
        }
    }
    
    return false
};