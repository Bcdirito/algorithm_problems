# Runtime 28ms, Memory Usage 10.8 MB

class Solution(object):
    def reverse(self, x):
        # convert the absolute value of the integer into a string
        int_str = str(abs(x))

        # declare an empty string that will become the reverse of our integer
        rev_str = ""
        
        # iterate through each character in the string
        for c in int_str:
            # add each character to the beginning of our rev_str variable
            rev_str = c + rev_str
        
        # convert our rev_str back to an integer
        final_int = int(rev_str)
        
        # if our original value was negative, multiply by -1
        if x < 0:
            final_int *= -1
        
        if (final_int < 2**31 - 1) and (final_int > -2**31):
            # if final_int is in the 32-Bit range, return final_int
            return final_int
        else:
            # else return 0
            return 0