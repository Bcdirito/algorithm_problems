# Runtime 32ms, Memory Usage 14.3 MB
def stringMatching(words):
    # declare empty list variable to hold the valid substrings
    substrings = []
    
    # iterate through the input list
    # check if word exists in other string
    # if so, push to list variable
    for w in words:
        word = w
        for x in words:
            if word in x and word != x:
                substrings.append(word)
                break
    
    return substrings