def disemvowel(string):
    # delcare a variable with a value of an empty string
    # this will eventually be our edited string
    edit_string = ""

    # delcare a list containing the vowels
    vowels = ["a", "e", "i", "o", "u"]
    
    # iterate through the string
    for s in string:
        # check if the lowercased character is contained in the vowels list
        # if not add it to the the edit_string variable
        if s.lower() not in vowels:
            edit_string += s
    
    # return the edited string
    return edit_string