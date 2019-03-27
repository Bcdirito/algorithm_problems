class Solution(object):
    def searchInsert(self, nums, target):
        i = -1
        
        for n in nums:
            i += 1
            if n >= target:
                return i
        
        return len(nums)