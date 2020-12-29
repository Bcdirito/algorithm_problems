# Runtime 44 ms, Memory Usage 14.3 MB
def runningSum(nums):
    # declare two empty list variables
    # the first is the list of our sums
    # the second is a growing collection of nums, used to calculate the sum
    sums = []
    it_nums = []
    
    # iterate through the input param
    # append the current element to the collection of nums
    # get the sum of the collection of nums and append it to the list of sums
    for n in nums:
        it_nums.append(n)
        sums.append(sum(it_nums))
    
    # return the sums list
    return sums