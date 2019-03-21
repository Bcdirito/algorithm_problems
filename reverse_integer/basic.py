class Solution(object):
    def reverse(self, x):
        int_str = str(abs(x))
        rev_str = ""
        
        for c in int_str:
            rev_str = c + rev_str
            
        final_int = int(rev_str)
        
        if x < 0:
            final_int *= -1
        
        if (final_int < 2**31 - 1) and (final_int > -2**31):
            return final_int
        else:
            return 0