# Runtime 68 ms, Memory Usage 12.3 MB

class Solution(object):
    def searchInsert(self, nums, target):
        # declare a counter variable and set it to -1
        # it will increment with each element
        # starting at -1 will make it equal to the index of the current element
        i = -1
        
        # iterate through the nums list
        for n in nums:
            # increment the counter
            i += 1

            if n >= target:
                # if the current element is greater than or equal to the target
                # return the counter
                return i
        
        # if all elements in the list are less than the target, we would append the target
        # the current length's index would equal the current length
        # return the current length
        return len(nums)