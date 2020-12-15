# Runtime 96 ms, Memory Usage 15.3 MB
def matrixReshape(self, nums: List[List[int]], r: int, c: int) -> List[List[int]]:
    # declare three variables
    # the first will be a flattened list that contains all values
    # the second will be the base for the reshaped matrix
    # the third will be the base for the reshaped rows that will be added to the reshaped matrix
    flat_list = []
    reshaped_matrix = []
    reshape_row = []
    
    # iterate through the original matrix and abstract each value
    for n in nums:
        for x in n:
            flat_list.append(x)
    
    # iterate through the flattened list
    for f in flat_list:
        
        # append the current value to the reshaped row
        reshape_row.append(f)

        # if the current rows length is long enough, append a copy to the reshaped matrix
        # then clear the values of the reshaped row
        if len(reshape_row) == c:
            reshaped_matrix.append(list(reshape_row))
            reshape_row.clear()
    
    # first check if there are enough rows
    # then check if each row has the appropriate number of columns
    # if all of these checks pass, then you can properly reshape the matrix and return the reshaped matrix
    # else return the original matrix
    if len(reshaped_matrix) == r:
        for matrix in reshaped_matrix:
            if len(matrix) != c:
                return nums
        
        return reshaped_matrix
    else:
        return nums