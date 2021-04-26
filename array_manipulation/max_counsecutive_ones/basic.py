def findMaxConsecutiveOnes(nums):
    one_count = 0
    max_count = 0
    
    for n in nums:
        if n == 1:
            one_count += 1
        else:
            if max_count < one_count:
                max_count = one_count
            
            one_count = 0
    
    
    return one_count if one_count > max_count else max_count