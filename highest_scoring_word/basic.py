def high(x):
    checker = ord("a") - 1
    word_dict = {}
    split_str = x.split()
    highest_word_val = 0
    highest_word = ""
    
    
    for word in split_str:
        word_dict[word] = 0
        for char in word:
            word_dict[word] += ord(char) - checker
            
    for key in word_dict:
        if word_dict[key] > highest_word_val:
            highest_word_val = word_dict[key]
            highest_word = key
    
    return highest_word