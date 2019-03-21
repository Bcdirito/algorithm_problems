class Solution(object):
    def twoSum(self, nums, target):
        history = {}
        n = -1
        
        for i in nums:
            n += 1
            print i
            if i in history :
                return [history[i], n]
            else:
                remainder = target - i
                history[remainder] = n
        