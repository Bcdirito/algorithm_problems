def stringMatching(words):
    substrings = []
    
    for w in words:
        word = w
        for x in words:
            if word in x and word != x:
                substrings.append(word)
                break
    
    return substrings