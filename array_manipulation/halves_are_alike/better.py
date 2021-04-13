def halvesAreAlike(s):
    mid_idx = int(len(s) / 2)
    first = s[0:mid_idx]
    second = s[mid_idx:]
    vowel_dict = {}
    
    def vowel_count(v_dict, string):
        counter = 0
        
        for s in string:
            if s in v_dict:
                counter += 1
        
        return counter
    
    for x in "aeiouAEIOU":
        vowel_dict[x] = ""


    return vowel_count(vowel_dict, first) == vowel_count(vowel_dict, second)