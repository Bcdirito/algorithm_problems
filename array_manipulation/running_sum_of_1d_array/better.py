# Runtime 44 ms, Memory Usage 14.2 MB
def runningSum(nums):
    # declare an empty list variable
    # we will use this to hold our sums
    sums = []
    
    # iterate through the input numbers using the range, so we have access to the index
    # append the sum for each index
    # you get the sum by using the built in sum method and a slice of the list
    for n in range(0, len(nums)):
        sums.append(sum(nums[0:n+1]))
        
    # return the sums
    return sums