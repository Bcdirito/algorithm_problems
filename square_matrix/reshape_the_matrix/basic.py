def matrixReshape(self, nums: List[List[int]], r: int, c: int) -> List[List[int]]:
    flat_list = []
    reshaped_matrix = []
    reshape_row = []
    
    for n in nums:
        for x in n:
            flat_list.append(x)
    
    for f in flat_list:
        reshape_row.append(f)
        if len(reshape_row) == c:
            reshaped_matrix.append(list(reshape_row))
            reshape_row.clear()
    
    if len(reshaped_matrix) == r:
        for matrix in reshaped_matrix:
            if len(matrix) != c:
                return nums
        
        return reshaped_matrix
    else:
        return nums