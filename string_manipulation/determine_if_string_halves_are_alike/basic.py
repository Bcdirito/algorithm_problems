def halvesAreAlike(s):
    consonants = "bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ"
    vowels = "aeiouAEIOU"
    
    def get_dict(string):
        str_dict = {}
        
        for s in string:
            str_dict[s] = ""
        
        return str_dict
    
    cons_dict = get_dict(consonants)
    vowels_dict = get_dict(vowels)
    str_half = int(len(s) / 2)
    
    def check_str(string):
        cons_count = 0
        vowels_count = 0
        
        for s in string:
            if s in consonants:
                cons_count += 1
            else:
                vowels_count += 1
        
        return [cons_count, vowels_count]
    
    first_check = check_str(s[:str_half])
    second_check = check_str(s[str_half:])
    
    return first_check[0] == second_check[0] and first_check[1] == second_check[1]
