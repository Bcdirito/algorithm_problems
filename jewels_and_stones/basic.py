# Runtime 32ms, Memory Usage 13.8 MB

def numJewelsInStones(self, J, S):
    # declare variable equal to 0
    # this will be the count of how many characters are shared between the two strings
    total = 0
    
    # iterate through the larger string
    for char in S:
        # check if the current character is in the other string
        if char in J:
            # if so, increment by 1
            total += 1
    
    return total
