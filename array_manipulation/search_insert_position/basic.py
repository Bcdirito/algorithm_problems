# Runtime 68 ms, Memory Usage 12.2 MB

class Solution(object):
    def searchInsert(self, nums, target):

        # iterate through the nums list
        for n in nums:

            # if the current element is less than or equal to the target
            if n >= target:

                # return the index of the current element
                return nums.index(n)
        
        # if all numbers are less than the target, the target will be appended to the end
        # the current length would be the element of the appended target
        # return the length of the nums list
        return len(nums)