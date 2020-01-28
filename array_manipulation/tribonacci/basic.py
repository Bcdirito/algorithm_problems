# Runtime 20 ms, Memory Usage 12.9 MB

class Solution:
    def tribonacci(self, n: int):
        # initialize a base tribonacci list
        trib_list = [0, 1, 1]
        
        # run the following logic n - 2 times
        # manipulate the value of the list to be the following (in order):
        # the value of the second element
        # the value of the third element
        # the sum of all three elements
        for n in range(2, n):
            trib_list = [trib_list[1], trib_list[2], (trib_list[0] + trib_list[1] + trib_list[2])]
            
        # utilizing a ternary operator check if n is greater than 2
        # if so, return the final value in the list which will always be the second index
        # if not, return the n-th value in the list
        return trib_list[2] if n > 2 else trib_list[n]