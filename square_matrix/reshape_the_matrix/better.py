# Runtime 92 ms, Memory Usage 15 MB 

def matrixReshape(self, nums: List[List[int]], r: int, c: int) -> List[List[int]]:
        # define two variables
        # the first will be the flattened list of all values in matrix
        # second will be the base for the reshaped matrix
        flat_list = []
        reshaped_matrix = []
        
        # the following iterates through each row in the matrix and adds the elements to the flattened list variable
        for n in nums:
            for x in n:
                flat_list.append(x)
        
        # iterate through the flattened list by the number of columns in each row of the reshaped matrix
        # create a sublist and check if the length of the sublist is the appropriate number of columns
        # if so, add the sublist to the reshaped matrix
        for f in range(0, len(flat_list), c):
            if len(flat_list[f:f+c]) == c:
                reshaped_matrix.append(flat_list[f:f+c])
        
        # check if the resphaped matrix contains the correct number of rows using a ternary operator
        # if it does, then we can correctly reshape the matrix
        # if not, return the original matrix
        return reshaped_matrix if len(reshaped_matrix) == r else nums