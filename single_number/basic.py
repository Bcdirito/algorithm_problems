# Runtime 148 ms, Memory Usage 14.3 MB

class Solution(object):
    def singleNumber(self, nums):
        # declare a history dictionary
        history = {}
        
        # iterate through the history
        for n in nums:
            if n in history:
                # if there is a key in the dictionary, increment the value by 1
                history[n] += 1
            else:
                # if not, create a key value pair of the current element and 1
                history[n] = 1
        
        # iterate through the dictionary
        for key in history:
            if history[key] == 1:
                # if the value of the pair is equal to 1
                # return that specific key
                return key