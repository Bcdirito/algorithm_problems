class Solution:
    def reverseOnlyLetters(self, S: str):
        letter_dict = {}
        reverse_letter_list = []
        final_str = ""
        
        for char in "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ":
            letter_dict[char] = 0
        
        for char in S:
            if char in letter_dict: reverse_letter_list.append(char) 
                
        for char in S:
            if char in letter_dict: final_str += reverse_letter_list.pop()
            else: final_str += char
        
        return final_str