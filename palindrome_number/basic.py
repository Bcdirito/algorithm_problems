# Runtime 136 ms, Memory Usage 10.9 MB

class Solution(object):
    def isPalindrome(self, x):  
        # convert x into a string 
        str_int = str(x)

        # declare an empty string variable
        # this will become our reversed integer
        rev_str = ""
        
        # iterate through the string
        for n in str_int:
            # add characters to the beginning of the string to reverse it
            rev_str = n + rev_str
        
        # return the boolean that comes from checking the equality of the two strings
        return rev_str == str_int