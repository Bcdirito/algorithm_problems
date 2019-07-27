def numJewelsInStones(self, J, S):
    total = 0
    
    for char in S:
        if char in J:
            total += 1
    
    return total
