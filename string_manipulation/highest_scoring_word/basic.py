def high(x):
    # declare a checker variable that is one less than the ascii value of a
    # this is equal to 96
    checker = ord("a") - 1

    # declare an empty word dictionary
    # we will store our words in this dictionary
    word_dict = {}

    # split the string by words for iteration later
    split_str = x.split()

    # declare a value variable for comparing word values
    highest_word_val = 0

    # declare an empty string variable
    # this will store the highest word
    highest_word = ""
    
    # iterate through the words in our split_str list
    for word in split_str:
        # add a key of the current to the word_dictionary
        # declare its value to 0
        word_dict[word] = 0

        # iterate through the word
        for char in word:
            # add the difference of the ascii code minues the character to the word key
            word_dict[word] += ord(char) - checker

    # iterate through the keys in the word_dict dictionary    
    for key in word_dict:
        # check if the current word is higher than the value of the highest word
        if word_dict[key] > highest_word_val:
            # if it is, set the value of the current word to the highest_word_val variable
            # and set the highest_word equal to the key, or current word
            highest_word_val = word_dict[key]
            highest_word = key
    
    # return the highest word
    return highest_word