def runningSum(self, nums: List[int]) -> List[int]:
    sums = []
    it_nums = []
    
    for n in nums:
        it_nums.append(n)
        sums.append(sum(it_nums))
        
    return sums