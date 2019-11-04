# Runtime 24 ms, Memoru Usage 11.8 MB

def toGoatLatin(self, S):
    # declare an empty list variable
    # this will hold all of our goat words
    goat_list = []

    # split the string into a list by word
    split_str = S.split(" ")

    # declare a counter at variable 0
    # this will help for adding the amount of "a"'s at the end of the word
    counter = 0
    
    # iterate through the split string array
    for word in split_str:
        # increment the counter by 1
        counter += 1

        # reset the word_count to 0
        # this is what we will incremement to get the right amount of "a"'s at the end of the word
        word_count = 0
        
        # reset the goat string to an empty string
        goat_str = ""
        
        # check if the first letter is a vowel
        if word[0].lower() in "aeiou":
            # if it is, the goat_str equals the word with "ma" tacked on at the end
            goat_str += word + "ma"
        else:
            # if not, get teh value of the goat_str by:
            # creating a substring starting at the second character
            # adding the first character to the substring
            # adding "ma" at the end
            goat_str = word[1:] + word[0] + "ma"
        
        # run a loop n amount equal to which word it is in the string
        while word_count < counter:
            # add "a" to the end of the string
            goat_str += "a"
            
            # increment the word_count by 1
            word_count += 1
        
        # append the word to the goat word list
        goat_list.append(goat_str)

    # join the goat_list into a string separated by a space   
    return " ".join(goat_list)