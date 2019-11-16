# Runtime 28 ms, Memory Usage 11.8 MB

class Solution(object):
    def plusOne(self, digits):
        # declare two new list variables
        # str_list will be what we store our new strings in
        # final_list will be the list of our new number
        str_list = []
        final_list = []
        
        # iterate through the digits
        for d in digits:
            # append a string of each digit to the str_list variable
            str_list.append(str(d))
        
        # join the elements in str_list
        join_str = "".join(str_list)

        # convert the join_str into an integer
        # add the integer by 1
        join_int = int(join_str) + 1
        
        # convert the join_int into a string
        # iterate through the string
        for c in str(join_int):
            # append the integer of each character to final_list
            final_list.append(int(c))
        
        # return final_list
        return final_list