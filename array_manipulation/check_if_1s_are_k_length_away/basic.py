def kLengthApart(nums, k):
    idxs = []
    
    for x in range(len(nums)):
        if nums[x] == 1:
            idxs.append(x)
    
    for x in range(len(idxs)-1):
        if (idxs[x+1] - (idxs[x] + 1)) < k:
            return False
        
    return True