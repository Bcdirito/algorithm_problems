def matrixReshape(self, nums: List[List[int]], r: int, c: int) -> List[List[int]]:
        flat_list = []
        reshaped_matrix = []
        
        for n in nums:
            for x in n:
                flat_list.append(x)
        
        for f in range(0, len(flat_list), c):
            if len(flat_list[f:f+c]) == c:
                reshaped_matrix.append(flat_list[f:f+c])
        
        if len(reshaped_matrix) == r:
            for matrix in reshaped_matrix:
                if len(matrix) != c:
                    return nums
            
            return reshaped_matrix
        else:
            return nums