# Runtime 28 ms, Memory Usage 14.1 MB
def toGoatLatin(self, S: str) -> str:
    # declare an empty dictionary
    reference = {}

    # iterate through a string of vowels and 
    for char in "aeiouAEIOU":
        reference[char] = ""
    
    # declare 3 variables 
    # split the argument string by word into a list
    # an empty string that will hold the appropriate number of "a"'s
    # an empty list that will hold all of the goat words
    split_str = S.split(" ")
    a_str = ""
    goat_arr = []
    
    # initialize a helper method that takes in a word
    # declare a string variable that will be the appropriate suffix
    # check if the first letter is a vowel and return the approriate goat word
    def goat_word(word):
        goat_suffix = "ma" + a_str
        if word[0] in reference:
            return word + goat_suffix
        else:
            return word[1:] + word[0] + goat_suffix

    # iterate through each word of the split word list
    # increment the a_str variable by an a for each word
    # append the goat word to the goat list   
    for s in split_str:
        a_str += "a"
        goat_arr.append(goat_word(s))
    
    # join the goat list by word
    return " ".join(goat_arr)