# Runtime 28 ms, Memory Usage 14.2MB
def halvesAreAlike(s):
    # declare a string of lower and uppercase consonants and a string of lower and uppercase vowels
    consonants = "bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ"
    vowels = "aeiouAEIOU"
    
    # declare a helper method
    # this method will iterate through a string and create a dictionary for faster lookup for the check
    def get_dict(string):
        str_dict = {}
        
        for s in string:
            str_dict[s] = ""
        
        return str_dict
    
    # run the helper method for a vowel and consonant dictionary
    cons_dict = get_dict(consonants)
    vowels_dict = get_dict(vowels)

    # get the middle index of the string
    str_half = int(len(s) / 2)
    
    # declare another helper method
    # this will check the number of consonants and vowels
    # and return as list
    def check_str(string):
        cons_count = 0
        vowels_count = 0
        
        for s in string:
            if s in consonants:
                cons_count += 1
            else:
                vowels_count += 1
        
        return [cons_count, vowels_count]
    
    # run helper method for each half of string
    first_check = check_str(s[:str_half])
    second_check = check_str(s[str_half:])
    
    # check halves and return boolean
    return first_check[0] == second_check[0] and first_check[1] == second_check[1]
