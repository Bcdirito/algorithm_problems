class Solution(object):
    def plusOne(self, digits):
        str_list = []
        final_list = []
        
        for d in digits:
            str_list.append(str(d))
        
        join_str = "".join(str_list)
        join_str = int(join_str) + 1
        
        for c in str(join_str):
            final_list.append(c)
        
        return final_list