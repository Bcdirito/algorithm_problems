# Runtime 28 ms, Memory Usage 12.6 MB

class Solution:
    def reverseOnlyLetters(self, S: str):
        # initialize three variables
        # one will be a dictionary we will use to check all of our letters
        # one will be a list we will use to hold the letters when we need to reverse the list
        # one will be a string that we will ultimately return
        letter_dict = {}
        reverse_letter_list = []
        final_str = ""
        
        # iterate through the alphabet string (the string is both lower and upper case)
        # for each character, set the key equal to the character and the value equal to 0
        for char in "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ":
            letter_dict[char] = 0
        
        # iterate through the argument string
        # if the character can be found inside of our dictionary, it is a letter, so append it into the list
        for char in S:
            if char in letter_dict: reverse_letter_list.append(char) 
                
        # iterate through the argument string a second time,\
        # if the current character is in the dictionary, it is a letter, so add the current last letter in the string to reverse the string
        # if it is not found in the dictionary, it is not a letter, so add it into the string
        for char in S:
            if char in letter_dict: final_str += reverse_letter_list.pop()
            else: final_str += char
        
        # return the string
        return final_str