class Solution(object):
    def singleNumber(self, nums):
        history = {}
        
        for n in nums:
            if n in history:
                history[n] += 1
            else:
                history[n] = 1
        
        for key in history:
            if history[key] == 1:
                return key