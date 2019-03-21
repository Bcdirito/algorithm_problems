class Solution(object):
    def missingNumber(self, nums):
        sort_nums = sorted(nums)
        i = 0
        
        for n in sort_nums:
            if i != n:
                return i
            else:
                i += 1
        
        return sort_nums[-1] + 1