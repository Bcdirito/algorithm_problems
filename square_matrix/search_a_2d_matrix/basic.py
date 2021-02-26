def searchMatrix(matrix, target):
    for m in matrix:
        if m[-1] >= target:
            return target in m