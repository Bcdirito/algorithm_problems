# Runtime 272 ms, Memory Usage 12.8 MB

class Solution(object):
    def missingNumber(self, nums):
        # sort the nums list into a new list variable
        sort_nums = sorted(nums)

        # declare a new variable
        # this variable will equate to the index of the current element in our iterator
        i = 0
        
        # iterate throught the sorted nums array
        for n in sort_nums:
            if i != n:
                # if the current number doesn't equal the index variable, we have found our missing number
                # return i
                return i
            else:
                # increment i by 1
                i += 1
        
        # if we make it to this point, there is no missing number
        # return the length of the list
        # the length would be the next number in the list
        return len(nums)