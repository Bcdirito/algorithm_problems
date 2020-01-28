class Solution:
    def tribonacci(self, n: int):
        trib_list = [0, 1, 1]
        
        for n in range(2, n):
            trib_list = [trib_list[1], trib_list[2], (trib_list[0] + trib_list[1] + trib_list[2])]
            
        return trib_list[2] if n > 2 else trib_list[n]