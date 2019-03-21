class Solution(object):
    def isPalindrome(self, x):
        """
        :type x: int
        :rtype: bool
        """
        
        str_int = str(x)
        rev_str = ""
        
        for n in str_int:
            rev_str = n + rev_str
        
        return rev_str == str_int