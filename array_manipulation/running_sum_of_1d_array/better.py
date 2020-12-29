def runningSum(nums):
    sums = []
    
    for n in range(0, len(nums)):
        sums.append(sum(nums[0:n+1]))
        
    return sums