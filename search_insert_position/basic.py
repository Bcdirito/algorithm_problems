class Solution(object):
    def searchInsert(self, nums, target):
        for n in nums:
            if n >= target:
                return nums.index(n)
        
        return len(nums)