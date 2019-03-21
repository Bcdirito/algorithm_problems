# Runtime 40 ms, Memory Usage 11.7 MB

class Solution(object):
    def twoSum(self, nums, target):
        # create a history dictionary
        # we will use this to store values to find a matching pair
        history = {}

        # set n to -1
        # n will serve as our index
        n = -1
        
        # iterate through the nums list
        for i in nums:
            # increase n by one to equal the value of the current index in nums
            n += 1

            if i in history :
                # if i is a key in our history dictionary
                # return a list of that particular index and the current index that add up to the target
                return [history[i], n]
            else:
                # if there is no key in our history dictionary
                # find the remainder of the target minus the current element 
                remainder = target - i

                # set a pair where the remainder is the key and our current index is the value
                history[remainder] = n
        